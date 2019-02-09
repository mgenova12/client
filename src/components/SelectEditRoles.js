import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import addEmployeeRole from '../mutations/addEmployeeRole'
import deleteEmployeeRole from '../mutations/deleteEmployeeRole'
import selectRole from '../mutations/selectRole'
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export class SelectEditRoles extends Component {
  state = {
  	checked: this.props.checked
  }


  handleChange = (role, addEmployeeRole, employeeId, deleteEmployeeRole, selectRole) => event => {
  	this.setState({ checked: !this.state.checked})

	selectRole({ variables: { id: parseInt(role.id), checked: !role.checked } })
	
	if(event.target.checked) {
		addEmployeeRole({ variables: { employeeId: parseInt(employeeId), roleId: parseInt(role.id) } })
	} else {
		deleteEmployeeRole({ variables: { employeeId: parseInt(employeeId), roleId: parseInt(role.id) } })
	}
  };  

	componentWillReceiveProps(nextProps){
	  if (nextProps.checked !== this.props.checked) {
	    this.setState({ checked: nextProps.checked })
	  }
	}

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
			          <Switch checked={this.state.checked} onChange={this.handleChange(this.props.role, addEmployeeRole, this.props.employeeId, deleteEmployeeRole, selectRole)} /> 
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

export default SelectEditRoles;