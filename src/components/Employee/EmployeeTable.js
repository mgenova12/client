import React, { Component } from 'react';

import { Query } from 'react-apollo';
import getEmployeeRolesQuery from '../../queries/getEmployeeRoles';

import EmployeeRow from './EmployeeRow'

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export class EmployeeTable extends Component {

  handleEdit = (employee) => {
   this.props.handleEdit(employee)
  }  

  handleDelete = () => {
   this.props.handleDelete()
  }

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
		            <TableCell><p>Name</p></TableCell>
                <TableCell><p>Roles</p></TableCell>
                <TableCell><p>Delete</p></TableCell>
		          </TableRow>
		        </TableHead>
		        	<EmployeeRow handleEdit={this.handleEdit} handleDelete={this.handleDelete} employees={data.employees}/>
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