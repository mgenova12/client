import React, { Component } from 'react';
import { Query } from 'react-apollo';
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';
import EmployeeRow from './EmployeeRow'
import EditEmployee from './EditEmployee'

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export class EmployeeTable extends Component {
  state = {
    showEdit: false,
    name: '',
    roles: ''
  }

  handleEdit = (name, roles) => {
   this.props.handleEdit()
   this.setState({showEdit: true, name: name, roles: roles})
  }  

  handleDelete = () => {
   this.props.handleDelete()
  }

  render() {
    return (
      <div>
        <div className={this.state.showEdit ? 'show' : 'hidden'}> 
          <EditEmployee name={this.state.name} roles={this.state.roles}/>
        </div>

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