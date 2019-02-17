import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import deleteEmployee from '../../mutations/deleteEmployee'
import getEmployeeRolesQuery from '../../queries/getEmployeeRoles';

import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

export class DeleteEmployee extends Component {
  
  handleDelete = (deleteEmployee, event) => {
    event.stopPropagation()
    deleteEmployee({ variables: { id: this.props.employeeId } });
    this.props.handleDelete()
  }
 
  handleMouseEnter = () => {
    this.props.handleMouseEnter()
  }

  handleMouseLeave = () => {
    this.props.handleMouseLeave()
  } 

  render() {
    return (
      <TableCell>
        <Mutation 
        mutation={deleteEmployee}
        refetchQueries={() => {
           return [{
              query: getEmployeeRolesQuery
          }];
        }}         
        >  
          {(deleteEmployee, { data }) => (
      	     <Button 
             onMouseEnter={this.handleMouseEnter} 
             onMouseLeave={this.handleMouseLeave} 
             variant="contained" color="secondary" 
             onClick={ (e) => {this.handleDelete(deleteEmployee, e)} }> X 
             </Button>
          )}
          </Mutation>  

      </TableCell>
    );
  }
}

export default DeleteEmployee;