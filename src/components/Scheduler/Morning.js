import React, { Component } from 'react';

import AddShift from './AddShift'

import Table from 'react-bootstrap/Table';

export class Morning extends Component {
  
  render() {

    return (
      <div>
		<Table striped bordered>
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
				<AddShift roleId={this.props.roleId} day={'Monday'} timeOfDay={'Morning'}/>
				<AddShift roleId={this.props.roleId} day={'Tuesday'} timeOfDay={'Morning'}/>
				<AddShift roleId={this.props.roleId} day={'Wednesday'} timeOfDay={'Morning'}/>
				<AddShift roleId={this.props.roleId} day={'Thursday'} timeOfDay={'Morning'}/>
				<AddShift roleId={this.props.roleId} day={'Friday'} timeOfDay={'Morning'}/>
				<AddShift roleId={this.props.roleId} day={'Saturday'} timeOfDay={'Morning'}/>
	 		  </tbody>		  						
		</Table>
      </div>
    );
  }
}

export default Morning;