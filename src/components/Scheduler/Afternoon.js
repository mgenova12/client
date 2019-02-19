import React, { Component } from 'react';

import AddShift from './AddShift'

import Table from 'react-bootstrap/Table';

export class Afternoon extends Component {

  render() {
    return (
      <div>      	
		<Table striped bordered>
      	<thead>
		    <tr>
	      		<th colSpan="6">Afternoon</th>
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
	        		<AddShift scheduleType={this.props.scheduleType} day={'Monday'} timeOfDay={'Afternoon'}/>
	        		<AddShift scheduleType={this.props.scheduleType} day={'Tuesday'} timeOfDay={'Afternoon'}/>
	        		<AddShift scheduleType={this.props.scheduleType} day={'Wednesday'} timeOfDay={'Afternoon'}/>
	        		<AddShift scheduleType={this.props.scheduleType} day={'Thursday'} timeOfDay={'Afternoon'}/>
	        		<AddShift scheduleType={this.props.scheduleType} day={'Friday'} timeOfDay={'Afternoon'}/>
	        		<AddShift scheduleType={this.props.scheduleType} day={'Saturday'} timeOfDay={'Afternoon'}/>
	 		  </tbody>						
		</Table>

      </div>
    );
  }
}

export default Afternoon;