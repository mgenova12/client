import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


export class EditEmployee extends Component {
 
 state = {
 	name: this.props.name
 }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  render() {

    return (
      <div>
      	<form 
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          e.target.reset();
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
      </div>
    );
  }
}

export default EditEmployee;