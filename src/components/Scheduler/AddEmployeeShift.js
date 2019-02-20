import React, { Component } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export class AddEmployeeShift extends Component {
  
  state = {
    employee: this.props.employee,
    open: false
  }

  handleChange = event => {
    this.setState({ employee: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };


  render() {

    return (
          <Select
            style={{color: 'white'}}
            open={this.state.open}
            onClose={() => this.handleClose()}
            onOpen={() => this.handleOpen()}
            renderValue={value => `${value}`}
            value={this.state.employee}
            onChange={(e) => this.handleChange(e)}
          >
            {this.props.employees.map( employee => (
              <MenuItem 
              key={employee.id} 
              value={employee.name}>{employee.name}</MenuItem>
            ))}
          </Select>
    );
  }
}

export default AddEmployeeShift;
