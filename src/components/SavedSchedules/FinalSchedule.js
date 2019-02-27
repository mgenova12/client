import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';

export class FinalSchedule extends Component {


  render() {
    return (
      <div>
      	FINAL SCHEDULE
  		ID : {this.props.match.params.id}
		
		<Table striped bordered>
	      	<thead>
			    <tr>
		      		<th colSpan="6">ROLE HERE</th>
		      	</tr>
			</thead> 		
			  <thead>
			    <tr>
			        <th>Monday</th>
			        <th>Tuesday</th>
			        <th>Wednesday</th>
			        <th>Thursday</th>
			        <th>Friday</th>
			        <th>Saturday</th>
			    </tr>
			  </thead>
			  <tbody>

	 		  </tbody>		  						
		</Table>

      </div>
    );
  }
}

export default FinalSchedule;