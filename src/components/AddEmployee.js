import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import addEmployee from '../mutations/addEmployee';
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';

import TextField from '@material-ui/core/TextField';
import GetRoles from './GetRoles'

export class AddEmployee extends Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (addEmployee, selectRole) => {
    const name  = this.state.name;
    addEmployee({ variables: { name: name } });
    this.setState({ name: '' });
  }

  render() {  	

    return (
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
    	        />
            </form>
             <GetRoles employeeId={data} />        
          </div>         

        )}
      </Mutation>

    );
  }
}

export default AddEmployee;