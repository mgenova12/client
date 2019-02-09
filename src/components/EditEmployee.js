import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import editEmployeeName from '../mutations/editEmployeeName';
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';
import AddEmployee from './AddEmployee'
import EmployeeTable from './EmployeeTable'

import GetEditRoles from './GetEditRoles'

import TextField from '@material-ui/core/TextField';


export class EditEmployee extends Component {

	state = {
		name: this.props.employee.name,
		edited: true
	}

	handleChange = event => {
		this.setState({ name: event.target.value });
	}

	handleEdited = () => {
		console.log('hi')
		this.setState({ edited: false });
	}

	handleSubmit = (editEmployeeName) => {
		const name = this.state.name;
		editEmployeeName({ variables: { employeeId: parseInt(this.props.employee.id), name: name } });
	}
	
	componentWillReceiveProps(nextProps){
	  if (nextProps.employee.name !== this.props.employee.name) {
	    this.setState({ name: nextProps.employee.name })
	  }
	}
	

  render() {

    return (
      <div>
      {this.state.edited ? (
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
			<GetEditRoles edited={this.handleEdited} roles={this.props.employee.roles} employeeId={this.props.employee.id}/>
          	<EmployeeTable handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete}/>
		</div>

		) : (

        <div>
          <AddEmployee/>
        </div>

        )}		

      </div>
    );
  }
}

export default EditEmployee;