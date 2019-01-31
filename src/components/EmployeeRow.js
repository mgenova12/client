import React, { Component } from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';



export class EmployeeRow extends Component {
  state = {
    employees: this.props.employees
  } 
 

  render() {
    return (    	
    	<TableBody>
           {this.props.employees.map( employee => (
          	<TableRow key={employee.id}>
              	<TableCell >{employee.name}</TableCell>
              	<TableCell >
              	{employee.roles.map(role => (
              		<p key={role.id}>{role.title} </p>
              	))}
              	</TableCell>
            </TableRow>
          ))}
		</TableBody>
    );
  }
}

export default EmployeeRow;