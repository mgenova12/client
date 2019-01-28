import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import addEmployee from '../mutations/addEmployee';

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

  handleSubmit = addEmployee => {
    const name  = this.state.name;
    addEmployee({ variables: { name } });
    this.setState({ name: '' });

    // refetchQueries: [{ query }]
  }

  render() {
    let addRoles 
    if (this.state.submitted) {
        addRoles = <AddRoles employeeId={this.state.id} />
    }  	
    console.log(this.state.name)
    // const { name } = this.state;
    return (
      <Mutation mutation={addEmployee}>

          <div>
          	<form onSubmit={() => this.handleSubmit(addEmployee)} autoComplete="off">
    	        <TextField
    	          id="outlined-name"
    	          label="Name"
    	          margin="normal"
    	          variant="outlined"
    	          onChange={this.handleChange}
    	        />
            </form>
             {addRoles}        
          </div>

      </Mutation>
    );
  }
}

export default AddEmployee;