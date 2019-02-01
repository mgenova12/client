import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import addEmployeeRole from '../mutations/addEmployeeRole'
import deleteEmployeeRole from '../mutations/deleteEmployeeRole'
import selectRole from '../mutations/selectRole'
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


export class SelectRoles extends Component {


  handleChange = (role, addEmployeeRole, employeeId, deleteEmployeeRole, selectRole) => event => {
	var id = employeeId.createEmployee.employee.id
	selectRole({ variables: { id: parseInt(role.id), checked: !role.checked } })
	
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

			      <Mutation 
			      mutation={selectRole}
			      refetchQueries={() => {
			         return [{
			            query: getEmployeeRolesQuery
			        }];
			      }}
			      >  
			      	{(selectRole, { data }) => (

			        <FormControlLabel 
			        key={this.props.role.id} 
			        control={ 
			          <Switch checked={this.props.role.checked} onChange={this.handleChange(this.props.role, addEmployeeRole, this.props.employeeId, deleteEmployeeRole, selectRole)} /> 
			        } 
			        label={this.props.role.title} />


				    )}
			      </Mutation> 

			    )}
		      </Mutation>   		        


	      	)}
      	  </Mutation> 
     

      </div>
    );
  }
}

export default SelectRoles;