import React, { Component } from 'react';

import { Query } from 'react-apollo';
import getScheduleQuery from '../../queries/getSchedule';

import { Mutation } from 'react-apollo';
import addSchedule from '../../mutations/addSchedule';

import SelectEmployee from './SelectEmployee'
import SelectTime from './SelectTime'
import DeleteShift from './DeleteShift'

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

var moment = require('moment')

export class AddShift extends Component {

	renderSchedule = (schedule) =>  {
	  switch(true) {
	    case (this.props.day === schedule.day && this.props.timeOfDay === schedule.timeOfDay):
	      return (
		      <td key={schedule.id}> 
		      	<SelectEmployee 
		      		employee={schedule.employee ? schedule.employee.name : ''} 
		      		scheduleType={schedule.role.title}
		      		scheduleId={schedule.id}
		      		roleId={this.props.roleId}
		      	/> 
		      	<SelectTime
		      		shiftTime={schedule.shiftTime ? `${moment.utc(schedule.shiftTime.startTime, 'YYYY-MM-DD HH:mm:ss", "UTC"').format('h:mm')} - ${moment.utc(schedule.shiftTime.endTime, 'YYYY-MM-DD HH:mm:ss", "UTC"').format('h:mm')}` : ''}
		      		scheduleType={schedule.role.title}
		      		timeOfDay={schedule.timeOfDay}
		      		scheduleId={schedule.id}
		      		roleId={this.props.roleId}
		      	/> 
		      	<hr/> 
		      	<DeleteShift 
		      		roleId={this.props.roleId} 
		      		Id={schedule.id}
		      	/> 
		      </td> 
	      )     
	    default:
	      return null;
	  }
	}


	addShift = (addSchedule, event) => {
		event.stopPropagation()
		event.preventDefault()
		addSchedule({ variables: { day: this.props.day, timeOfDay: this.props.timeOfDay, roleId: this.props.roleId } });
	}

  render() {

    return (
    	<tr className='invert'>
	        <Query
	          query={getScheduleQuery}
	          variables={{ roleId: this.props.roleId }}
	        >
	        {({ loading, error, data }) => { 
	          if (loading) return <td>Loading...</td>;
	          if (error) return <td>ERROR</td>;
	          
	          return(
                  data.schedules.map( schedule => (
                  	this.renderSchedule(schedule)
                  ))
	          )
	        }}
	        </Query>   
	         		
	      	<td>
	          <Mutation 
	            mutation={addSchedule}
	            refetchQueries={() => {
	               return [{
	                  query: getScheduleQuery,
	                  variables: { roleId: this.props.roleId }
	              }];
	            }}        
	            >
	              {(addSchedule, { data }) => ( 

			        <Fab onClick={(e) => this.addShift(addSchedule, e)} 
			        	className="fab" size="small" color="primary" aria-label="Add">
			          <AddIcon/>
			        </Fab>
              	  )}

              </Mutation>		        
	      	</td>

      	</tr>
    );
  }
}

export default AddShift;