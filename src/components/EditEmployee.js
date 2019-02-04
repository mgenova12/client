import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


export class EditEmployee extends Component {
  state = {
  	newName: this.props.name
  }
 
  handleChange = event => {
    this.setState({ newName: event.target.value });
  }


  render() {
  	console.log(this.props.name)
  	// console.log(this.props.roles)
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
              value={this.props.name}
	        />
        </form>
      </div>
    );
  }
}

export default EditEmployee;