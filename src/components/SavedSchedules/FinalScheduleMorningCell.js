import React, { Component } from 'react';

import { Query } from 'react-apollo';
import getFinalScheduleQuery from '../../queries/getFinalSchedule';

// import FinalScheduleAfternoonCell from './FinalScheduleAfternoonCell'

export class FinalScheduleCell extends Component {

	renderFinalSchedule = (schedule) =>  {
		return <td key={schedule.id}>{schedule.employee.name}</td>
	}


  render() {
    return (
    	<tr className='invert'>
	        <Query
	          query={getFinalScheduleQuery}
	          variables={{ 
	          	roleId: this.props.roleId,
	          	day: this.props.day,
	          	savedScheduleId: 21, 
	          	timeOfDay: 'Morning'
	          }}
	        >
		        {({ loading, error, data }) => { 
		          if (loading) return <td>Loading...</td>;
		          if (error) return <td>ERROR</td>;
		          
		          return(
	                  data.finalSchedule.map( schedule => (
	                  	this.renderFinalSchedule(schedule)
	                  ))
		          	)
		        }}
	        </Query>   


		</tr>

    );
  }
}

export default FinalScheduleCell;