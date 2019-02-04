import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import getEmployeeRolesQuery from '../queries/getEmployeeRoles';
import deleteEmployee from '../mutations/deleteEmployee'

export class DeleteEmployee extends Component {
  
  handleDelete = (deleteEmployee) => {
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
             onClick={ () => {this.handleDelete(deleteEmployee)} }> X 
             </Button>
          )}
          </Mutation>  

      </TableCell>
    );
  }
}

export default DeleteEmployee;