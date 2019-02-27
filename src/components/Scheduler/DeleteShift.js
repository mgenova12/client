import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import deleteShift from '../../mutations/deleteShift';
import getScheduleQuery from '../../queries/getSchedule';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


export class DeleteShift extends Component {

  deleteColumn = (deleteShift, event) => {
    deleteShift({ variables: { id: parseInt(this.props.Id) } });
  }

  render() {

    return (
        <Mutation 
        mutation={deleteShift}
        refetchQueries={() => {
           return [{
              query: getScheduleQuery,
              variables: { roleId: this.props.roleId }
          }];
        }}         
        > 
        {(deleteShift, { data }) => (
          
          <Button 
            onClick={(e) => this.deleteColumn(deleteShift, e)} 
            size="small" 
            variant="contained" 
            color="secondary" >
            
            Delete
            <DeleteIcon/>
          </Button>

          )}
          </Mutation>         
    );
  }
}

export default DeleteShift;