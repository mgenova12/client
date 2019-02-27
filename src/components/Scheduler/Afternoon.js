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
	        		<AddShift roleId={this.props.roleId} day={'Monday'} timeOfDay={'Afternoon'}/>
	        		<AddShift roleId={this.props.roleId} day={'Tuesday'} timeOfDay={'Afternoon'}/>
	        		<AddShift roleId={this.props.roleId} day={'Wednesday'} timeOfDay={'Afternoon'}/>
	        		<AddShift roleId={this.props.roleId} day={'Thursday'} timeOfDay={'Afternoon'}/>
	        		<AddShift roleId={this.props.roleId} day={'Friday'} timeOfDay={'Afternoon'}/>
	        		<AddShift roleId={this.props.roleId} day={'Saturday'} timeOfDay={'Afternoon'}/>
	 		  </tbody>						
		</Table>

      </div>
    );
  }
}

export default Afternoon;