import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import EmployeeTable from './EmployeeTable'
import addEmployee from '../mutations/addEmployee';
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';

import TextField from '@material-ui/core/TextField';
import GetRoles from './GetRoles'

export class AddEmployee extends Component {
  state = {
    name: '',
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
  
  handleEdit = () => {
   this.setState({showAddEmployee: false, showRoles: false})
  }  

  handleDelete = () => {
    console.log('DELETE')
  }

  render() {  	

    return (
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
          <div className={this.state.showAddEmployee ? 'show' : 'hidden'} >
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
             <GetRoles onSave={this.handleSave} employeeId={data} showRoles={this.state.showRoles} />        
          </div>         

        )}
      </Mutation>
      <EmployeeTable handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default AddEmployee;