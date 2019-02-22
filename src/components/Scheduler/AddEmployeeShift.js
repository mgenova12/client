import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import updateEmployeeSchedule from '../../mutations/updateEmployeeSchedule';

import getScheduleQuery from '../../queries/getSchedule';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export class AddEmployeeShift extends Component {
  
  state = {
    employee: this.props.employee,
    open: false
  }

  handleChange = (event, updateEmployeeSchedule) => {
    this.setState({ employee: event.target.value.name });
    updateEmployeeSchedule({ variables: { id: this.props.scheduleId, employeeId: parseInt(event.target.value.id) } });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };


  render() {
    console.log(this.props.employee)
    return (
            <Mutation 
              mutation={updateEmployeeSchedule}  
              refetchQueries={() => {
                 return [{
                    query: getScheduleQuery,
                    variables: { scheduleType: this.props.scheduleType }
                }];
              }}                   
              >
                {(updateEmployeeSchedule, { data }) => ( 
                  <Select
                    style={{color: 'white'}}
                    open={this.state.open}
                    onClose={() => this.handleClose()}
                    onOpen={() => this.handleOpen()}
                    renderValue={value => `${value}`}
                    value={this.state.employee}
                    onChange={(e) => this.handleChange(e, updateEmployeeSchedule)}
                  >
                    {this.props.employees.map( employee => (
                      <MenuItem 
                      key={employee.id} 
                      value={{name: employee.name, id: employee.id}}>{employee.name}</MenuItem>
                    ))}
                  </Select>
                )}

            </Mutation>                  

    );
  }
}

export default AddEmployeeShift;
