import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';


export class SavedScheduleRow extends Component {


	showSavedSchedule = (id) => {
		this.props.history.push(`/saved_schedules/${id}`)
	}


  render() {
    return (
	    	<TableBody>
	           {this.props.savedSchedules.map( savedSchedule => (
		          	<TableRow className="tableRow" key={savedSchedule.id} onClick={() => this.showSavedSchedule(savedSchedule.id)}>
		              <TableCell><p>{savedSchedule.id}</p> </TableCell>
		              <TableCell><p> {savedSchedule.createdAt} </p></TableCell>
		              <TableCell><p>Some Date</p></TableCell>
		            </TableRow>

	          ))}
						
			</TableBody>
    );
  }
}

export default withRouter(SavedScheduleRow);