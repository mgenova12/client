import React, { Component } from 'react';

import { Query } from 'react-apollo';
import getScheduleQuery from '../../queries/getSchedule';

import SelectEmployee from './SelectEmployee'
import SelectTime from './SelectTime'

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';



export class AddShift extends Component {

	renderSchedule = (schedule) =>  {
	  switch(true) {
	    case (this.props.day === schedule.day && this.props.timeOfDay === schedule.timeOfDay):
	      return <td key={schedule.id}><SelectEmployee/> <SelectTime/> </td>;      
	    default:
	      return null;
	  }
	}


	addColumn = (event) => {
		// event.stopPropagation()
		event.preventDefault()
  		console.log(this.props.day)
  		console.log(this.props.timeOfDay)
	}

  render() {

    return (
    	<tr className='invert'>
	        <Query
	          query={getScheduleQuery}
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
		        <Fab onClick={(e) => this.addColumn(e)} 
		        	className="fab" size="small" color="primary" aria-label="Add">
		          <AddIcon/>
		        </Fab>
	      	</td>

      	</tr>
    );
  }
}

export default AddShift;