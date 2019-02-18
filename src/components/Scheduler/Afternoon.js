import React, { Component } from 'react';

import AddShift from './AddShift'

import Table from 'react-bootstrap/Table';

export class Afternoon extends Component {

  render() {
    return (
      <div>      	
		<Table striped bordered hover>
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
	        		<AddShift day={'monday'} timeOfDay={'Afternoon'}/>
	        		<AddShift day={'tuesday'} timeOfDay={'Afternoon'}/>
	        		<AddShift day={'wednesday'} timeOfDay={'Afternoon'}/>
	        		<AddShift day={'thursday'} timeOfDay={'Afternoon'}/>
	        		<AddShift day={'friday'} timeOfDay={'Afternoon'}/>
	        		<AddShift day={'saturday'} timeOfDay={'Afternoon'}/>
	 		  </tbody>						
		</Table>

      </div>
    );
  }
}

export default Afternoon;