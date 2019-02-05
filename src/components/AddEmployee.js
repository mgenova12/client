import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import EmployeeTable from './EmployeeTable'
import addEmployee from '../mutations/addEmployee';
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';
import EditEmployee from './EditEmployee'

import TextField from '@material-ui/core/TextField';
import GetRoles from './GetRoles'

export class AddEmployee extends Component {
  state = {
    name: '',
    roles: [] ,
    showAddEmployee: true,
    showRoles: false
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (addEmployee) => {
    const name  = this.state.name;
    addEmployee({ variables: { name: name } });
    this.setState({ name: '', showRoles: true });
  }

  handleSave = () => {
    this.setState({showRoles: false})
  } 
  
  handleEdit = (employee) => {
    this.setState({showAddEmployee: false, showRoles: true, name: employee.name, roles: employee.roles})
  }  

  handleDelete = () => {
    console.log('DELETE')
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
          </div>
        
        ) : (
        <div>
          <EditEmployee name={this.state.name} roles={this.state.roles}/>
        </div>
        )}

      <EmployeeTable handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default AddEmployee;