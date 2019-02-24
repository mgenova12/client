import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import updateShiftTimeSchedule from '../../mutations/updateShiftTimeSchedule';

import getScheduleQuery from '../../queries/getSchedule';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export class AddShiftTime extends Component {

  state = {
    shiftTime: this.props.shiftTime,
    open: false
  }

  handleChange = (event, updateShiftTimeSchedule) => {
  	let currentTime = new Date(`2019-12-17T${event.target.value.name}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    this.setState({ shiftTime: currentTime });
    updateShiftTimeSchedule({ variables: { id: this.props.scheduleId, shiftTimeId: parseInt(event.target.value.id) } });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };


	renderShiftTimes = (shiftTime) => {
		let currentTime = new Date(`2019-12-17T${shiftTime.time}`)
		let hours = currentTime.getHours()

	  switch(true) {
	    case (this.props.timeOfDay === "Morning" && hours < 12):
	      return (
			      <MenuItem 
			      	key={shiftTime.id} 
			      	value={{name: shiftTime.time, id: shiftTime.id}}>
			      	{currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
			      </MenuItem>					 
	      )  
	    case (this.props.timeOfDay === "Afternoon" && hours >= 12):
	      return (
			      <MenuItem 
			      	key={shiftTime.id} 
			      	value={{name: shiftTime.time, id: shiftTime.id}}>
			      	{currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
			      </MenuItem>					 
	      ) 	         
	    default:
	      return null;
	  }

	}


  render() {
    return (
            <Mutation 
              mutation={updateShiftTimeSchedule}  
              refetchQueries={() => {
                 return [{
                    query: getScheduleQuery,
                    variables: { scheduleType: this.props.scheduleType }
                }];
              }}                   
              >
                {(updateShiftTimeSchedule, { data }) => ( 
				          <Select
				            style={{color: 'white'}}
				            open={this.state.open}
				            onClose={() => this.handleClose()}
				            onOpen={() => this.handleOpen()}
				            renderValue={value => this.state.shiftTime}
				            value={this.state.shiftTime}
				            onChange={(e) => this.handleChange(e, updateShiftTimeSchedule)}
				          >

				            {this.props.shiftTimes.map( shiftTime => (
				            	this.renderShiftTimes(shiftTime)
				            ))}

				          </Select>
                )}

            </Mutation>				          
    );
  }
}

export default AddShiftTime;