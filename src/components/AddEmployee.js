import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import addEmployee from '../mutations/addEmployee';
import selectRole from '../mutations/selectRole';
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';

import TextField from '@material-ui/core/TextField';
import AddRoles from './AddRoles'

export class AddEmployee extends Component {
  state = {
    name: '',
    id: null,
    submitted: false
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (addEmployee, selectRole) => {
    const name  = this.state.name;
    addEmployee({ variables: { name: name } });
    
    selectRole({ variables: { checked: false } })

    this.setState({ name: '', submitted: true });
  }

  render() {
    // let addRoles 
    // if (this.state.submitted) {
    //     addRoles = <AddRoles employeeId={this.state.id} />
    // }  	

    return (
      <Mutation 
      mutation={addEmployee}
      onCompleted={data => this.setState({id: data.createEmployee.employee.id})}
      refetchQueries={() => {
         return [{
            query: getEmployeeRolesQuery
        }];
      }}        
      >
        {(addEmployee, { data }) => (

        <Mutation 
        mutation={selectRole}      
        >
        {(selectRole, { data }) => (
          <div>
          	<form 
            autoComplete="off"
            onSubmit={e => {
              e.preventDefault();
              e.target.reset();
              this.handleSubmit(addEmployee, selectRole)
            }}
            >
    	        <TextField
    	          id="outlined-name"
    	          label="Name"
    	          margin="normal"
    	          variant="outlined"
    	          onChange={this.handleChange}
    	        />
            </form>
             <AddRoles employeeId={this.state.id} />        
          </div>
          )}
        </Mutation>          


        )}
      </Mutation>

    );
  }
}

export default AddEmployee;