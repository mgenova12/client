import React, { Component } from 'react';
import DeleteEmployee from './DeleteEmployee'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

export class EmployeeRow extends Component {

 handleEdit = () => {
  console.log('EDIT')
 }

  render() {
    return (    	
    	<TableBody>
           {this.props.employees.map( employee => (


          	<TableRow className={'tableRow'} onClick={this.handleEdit} key={employee.id}>
              	<TableCell><p>{employee.name}</p></TableCell>
              	<TableCell >
              	{employee.roles.map(role => (
              		<p key={role.id}>{role.title} </p>
              	))}
              	</TableCell>

                <DeleteEmployee/>

            </TableRow>


          ))}
		</TableBody>
    );
  }
}

export default EmployeeRow;