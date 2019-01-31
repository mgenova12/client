import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import addEmployeeRole from '../mutations/addEmployeeRole'
import deleteEmployeeRole from '../mutations/deleteEmployeeRole'
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export class SelectRoles extends Component {

  handleChange = (role, addEmployeeRole, employeeId, deleteEmployeeRole) => event => {
	var id = employeeId.createEmployee.employee.id
	if(event.target.checked) {
		addEmployeeRole({ variables: { employeeId: parseInt(id), roleId: parseInt(role.id) } })
	} else {
		deleteEmployeeRole({ variables: { employeeId: parseInt(id), roleId: parseInt(role.id) } })
	}
  };  
 
  render() {
    return (
      <div>
	      <Mutation 
	      mutation={addEmployeeRole}
	      refetchQueries={() => {
	         return [{
	            query: getEmployeeRolesQuery
	        }];
	      }}
	      >  
	      	{(addEmployeeRole, { data }) => (

		      <Mutation 
		      mutation={deleteEmployeeRole}
		      refetchQueries={() => {
		         return [{
		            query: getEmployeeRolesQuery
		        }];
		      }}
		      >  
		      	{(deleteEmployeeRole, { data }) => (	      		
			        <FormControlLabel 
			        key={this.props.role.id} 
			        control={ 
			          <Switch onChange={this.handleChange(this.props.role, addEmployeeRole, this.props.employeeId, deleteEmployeeRole)} /> 
			        } 
			        label={this.props.role.title} />
			    )}
		      </Mutation>   		        


	      	)}
      	  </Mutation> 

      </div>
    );
  }
}

export default SelectRoles;