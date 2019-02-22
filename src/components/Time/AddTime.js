import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import addShiftTime from '../../mutations/addShiftTime';

import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';


const styles = {
  inputSize: {
    height: 50,
    fontSize: "1.6em"
  }
};

export class TimeSetup extends Component {
	state = {
		time: ""
	}

  	handleChange = event => {
    	this.setState({ time: event.target.value });
  	}

	handleSubmit = (event, addShiftTime) => {
		event.preventDefault();
		console.log('sumbit')
		addShiftTime({ variables: { time: event.target.value } });
		this.setState({ time: "" });
	}


  render() {
  	const { classes } = this.props;

    return (
      <div>
      	 <br/> 	 
          <Mutation 
            mutation={addShiftTime}       
            >
              {(addShiftTime, { data }) => (       	 

			      <TextField
					onKeyPress={(e) => {
	    				if (e.key === 'Enter') {
	      					this.handleSubmit(e, addShiftTime)
	    				}
	  				}}		      
			        id="time"
			        label="Shift Time"
			        value={this.state.time}
			        onChange={this.handleChange}
			        type="time"		        
					InputProps={{ 
						classes: { input: classes.inputSize },
			          	step: 300, // 5 min
					}}
			        InputLabelProps={{
			          shrink: true,
			        }}

			      /> 
              )}
            </Mutation>

      </div>
    );
  }
}

export default withStyles(styles)(TimeSetup);