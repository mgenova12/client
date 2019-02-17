import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import addEmployee from '../../mutations/addEmployee';
import getEmployeeRolesQuery from '../../queries/getEmployeeRoles';

import EmployeeTable from './EmployeeTable'
import EditEmployee from './EditEmployee'
import GetRoles from './GetRoles'

import TextField from '@material-ui/core/TextField';

export class AddEmployee extends Component {
  state = {
    name: '',
    showAddEmployee: true,
    showRoles: false,
    employee:[]
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (addEmployee) => {
    const name  = this.state.name;
    addEmployee({ variables: { name: name } });
    this.setState({ name: '', showRoles: true });
    this.props.successNotification('Added!',`${name} Has been Added!`, 'success')
  }

  handleSave = () => {
    this.setState({showRoles: false})
    this.props.successNotification('Saved!', 'Employee has been saved!', 'success')
  } 
  
  handleEdit = (employee) => {
    this.setState({employee: employee, showAddEmployee: false, showRoles: true, name: employee.name})
  }  

  handleDelete = () => {
    this.props.successNotification('Deleted!', 'Employee has been deleted!', 'danger')
  }

  render() {  	

    return (
      <div>
      {this.state.showAddEmployee ? (
        <div>
        
          <Mutation 
            mutation={addEmployee}
            refetchQueries={() => {
               return [{
                  query: getEmployeeRolesQuery
              }];
            }}        
            >
              {(addEmployee, { data }) => ( 
                  
                <div>
                	<form 
                  autoComplete="off"
                  onSubmit={e => {
                    e.preventDefault();
                    e.target.reset();
                    this.handleSubmit(addEmployee)
                  }}
                  >
          	        <TextField
          	          id="outlined-name"
          	          label="Name"
          	          margin="normal"
          	          variant="outlined"
          	          onChange={this.handleChange}
                      value={this.state.name}
          	        />
                  </form>
 
                    {this.state.showRoles &&
                     <GetRoles onSave={this.handleSave} employeeId={data} showRoles={this.state.showRoles}/>
                    }
                </div>         
              )}
            </Mutation>
          
  
          

            <EmployeeTable handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
          </div>
        
        ) : (
        <div>
          <EditEmployee successNotification={this.props.successNotification} handleEdit={this.handleEdit} handleDelete={this.handleDelete} employee={this.state.employee} />
        </div>
        )}


      </div>
    );
  }
}

export default AddEmployee;