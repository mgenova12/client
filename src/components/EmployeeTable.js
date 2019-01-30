import React, { Component } from 'react';
import { Query } from 'react-apollo';
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export class EmployeeTable extends Component {
  




  render() {
    return (
      <div>
        <Query
          query={getEmployeeRolesQuery}
        >
        {({ loading, error, data }) => { 
          if (loading) return <p>Loading...</p>;
          if (error) return <p>ERROR</p>;
          
          return(
            <div>
		       <Table>
		        <TableHead>
		          <TableRow>
		            <TableCell>Name</TableCell>
		            <TableCell>Roles</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
        
                  {data.employees.map( employee => (
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
		      </Table>
            </div>
          )
        }}
        </Query>   		   										
      </div>
    );
  }
}

export default EmployeeTable;