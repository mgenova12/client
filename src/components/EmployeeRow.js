import React, { Component } from 'react';
import DeleteEmployee from './DeleteEmployee'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

export class EmployeeRow extends Component {
  state = {
    hover: true
  }

  handleEdit = (employee) => {
   this.props.handleEdit(employee)
  }  

  handleDelete = () => {
   this.props.handleDelete()
  }

  handleMouseEnter = () => {
    this.setState({hover: false})
  }  

  handleMouseLeave = () => {
    this.setState({hover: true})
  }


  render() {
    return (    	
    	<TableBody>
           {this.props.employees.map( employee => (

          	<TableRow
            className={this.state.hover ? 'tableRow' : 'off'} 
            onClick={() => this.handleEdit(employee)} 
            key={employee.id}
            >
              	<TableCell><p>{employee.name}</p></TableCell>
              	<TableCell >
              	{employee.roles.map(role => (
              		<p key={role.id}>{role.title} </p>
              	))}
              	</TableCell>

                <DeleteEmployee 
                handleMouseEnter={this.handleMouseEnter} 
                handleMouseLeave={this.handleMouseLeave} 
                employeeId={employee.id}
                handleDelete={this.handleDelete}
                />

            </TableRow>


          ))}
		</TableBody>
    );
  }
}

export default EmployeeRow;