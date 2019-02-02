import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

export class DeleteEmployee extends Component {
  
  handleDelete = () => {
  	console.log('DELETE')
  }
 

  render() {
    return (
      <TableCell>
      	<Button variant="contained" color="secondary" onClick={this.handleDelete}> X </Button>
      </TableCell>
    );
  }
}

export default DeleteEmployee;