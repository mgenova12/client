import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import updateShiftTimeSchedule from '../../mutations/updateShiftTimeSchedule';

import getScheduleQuery from '../../queries/getSchedule';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

var moment = require('moment')

export class AddShiftTime extends Component {

  state = {
    shiftTime: this.props.shiftTime,
    open: false
  }

  handleChange = (event, updateShiftTimeSchedule) => {
    this.setState({ shiftTime: event.target.value.name });
    updateShiftTimeSchedule({ variables: { id: this.props.scheduleId, shiftTimeId: parseInt(event.target.value.id) } });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

	renderShiftTimes = (shiftTime) => {
		let amPm = moment.utc(shiftTime.startTime, 'YYYY-MM-DD HH:mm:ss", "UTC"').format('a')
		let startTime = moment.utc(shiftTime.startTime, 'YYYY-MM-DD HH:mm:ss", "UTC"').format('h:mm')
		let endTime = moment.utc(shiftTime.endTime, 'YYYY-MM-DD HH:mm:ss", "UTC"').format('h:mm')
		let currentTime = `${startTime} - ${endTime}`

	  switch(true) {
	    case (this.props.timeOfDay === "Morning" && amPm === 'am'):
	      return (
			      <MenuItem 
			      	key={shiftTime.id} 
			      	value={{name: currentTime, id: shiftTime.id}}>
			      	{currentTime}
			      </MenuItem>					 
	      )  
	    case (this.props.timeOfDay === "Afternoon" && amPm === 'pm'):
	      return (
			      <MenuItem 
			      	key={shiftTime.id} 
			      	value={{name: currentTime, id: shiftTime.id}}>
			      	{currentTime}
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