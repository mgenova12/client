import React, { Component } from 'react';

import AddShift from './AddShift'

import Table from 'react-bootstrap/Table';

export class Morning extends Component {
  

  render() {

    return (
      <div>
		<Table striped bordered hover>
      	<thead>
		    <tr>
	      		<th colSpan="6">Morning</th>
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
	        		<AddShift day={'monday'} timeOfDay={'Morning'}/>
	        		<AddShift day={'tuesday'} timeOfDay={'Morning'}/>
	        		<AddShift day={'wednesday'} timeOfDay={'Morning'}/>
	        		<AddShift day={'thursday'} timeOfDay={'Morning'}/>
	        		<AddShift day={'friday'} timeOfDay={'Morning'}/>
	        		<AddShift day={'saturday'} timeOfDay={'Morning'}/>
	 		  </tbody>		  						
		</Table>
      </div>
    );
  }
}

export default Morning;