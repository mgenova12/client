import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import addShiftTime from '../../mutations/addShiftTime';
import getShiftTimesQuery from '../../queries/getShiftTimes';

import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const styles = {
  inputSize: {
    height: 50,
    fontSize: "1.6em"
  }
};

export class TimeSetup extends Component {
	state = {
		startTime: "",
		endTime:""
	}

  	handleStartTime = event => {
    	this.setState({ startTime: event.target.value });
  	}
  	
  	handleEndTime = event => {
    	this.setState({ endTime: event.target.value });
  	}

	handleSubmit = (event, addShiftTime) => {
		event.preventDefault();
		if(!this.state.startTime || !this.state.endTime){
			console.log('Invalid Date!')
		} else{
			addShiftTime({ variables: { startTime: this.state.startTime, endTime: this.state.endTime } });
			this.setState({ startTime: "", endTime: "" });
		}
	}


  render() {
  	const { classes } = this.props;

    return (
      <div >
      	 <br/> 	 
          <Mutation 
            mutation={addShiftTime}
            refetchQueries={() => {
               return [{
                  query: getShiftTimesQuery
              }];
            }}                    
            >
              {(addShiftTime, { data }) => (       	 
              	<div>
	              	<div className="text">
				      <TextField		      
				        label="Start Time"
				        // value={this.state.time}
				        onChange={this.handleStartTime}
				        type="time"		        
						InputProps={{ 
							classes: { input: classes.inputSize },
				          	step: 300, // 5 min
						}}
				        InputLabelProps={{
				          shrink: true,
				        }}
				      /> 
				      </div>

				      <div className="text typography">
				        <Typography align="center" inline={true} variant="h6">
				          To
				        </Typography>
				      </div>

				      <div className="text">
					      <TextField
							onKeyPress={(e) => {
			    				if (e.key === 'Enter') {
			      					this.handleSubmit(e, addShiftTime)
			    				}
			  				}}		      

					        label="End Time"
					        // value={this.state.time}
					        onChange={this.handleEndTime}
					        type="time"		        
							InputProps={{ 
								classes: { input: classes.inputSize },
					          	step: 300, // 5 min
							}}
					        InputLabelProps={{
					          shrink: true,
					        }}
					      /> 
				      </div>
			      </div>



              )}
            </Mutation>

      </div>
    );
  }
}

export default withStyles(styles)(TimeSetup);