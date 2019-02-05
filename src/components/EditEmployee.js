import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import editEmployeeName from '../mutations/editEmployeeName';
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';

import GetEditRoles from './GetEditRoles'

import TextField from '@material-ui/core/TextField';


export class EditEmployee extends Component {
 
 state = {
 	name: this.props.employee.name
 }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (editEmployeeName) => {
    const name  = this.state.name;
    editEmployeeName({ variables: { employeeId: parseInt(this.props.employee.id), name: name } });
  }

  render() {

    return (
      <div>
      <Mutation 
        mutation={editEmployeeName}
        refetchQueries={() => {
           return [{
              query: getEmployeeRolesQuery
          }];
        }}        
        >
          {(editEmployeeName, { data }) => (    
		      	<form 
		        autoComplete="off"
		        onSubmit={e => {
		          e.preventDefault();
		          e.target.reset();
		          this.handleSubmit(editEmployeeName)
		        }}
		        >
			        <TextField
			          id="outlined-name"
			          label="Edit"
			          margin="normal"
			          variant="outlined"
			          onChange={this.handleChange}
		              value={this.state.name}
			        />
		        </form>
            )}
		</Mutation>

		<GetEditRoles roles={this.props.employee.roles}/>

      </div>
    );
  }
}

export default EditEmployee;