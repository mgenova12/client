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
    submitted: false
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (addEmployee) => {
    const name  = this.state.name;
    addEmployee({ variables: { name: name } });
    this.setState({ name: '', submitted: true });
  }

  handleSave = (val) => {
    this.setState({submitted: val})
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
             <GetRoles onSave={this.handleSave} employeeId={data} submitted={this.state.submitted} />        
          </div>         

        )}
      </Mutation>
      <EmployeeTable/>
      </div>
    );
  }
}

export default AddEmployee;