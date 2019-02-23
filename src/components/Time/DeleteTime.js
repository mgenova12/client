import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import deleteShiftTime from '../../mutations/deleteShiftTime'
import getShiftTimesQuery from '../../queries/getShiftTimes';

import Button from '@material-ui/core/Button';


export class DeleteTime extends Component {
  
  handleDelete = (deleteShiftTime, event) => {
    // event.stopPropagation()
    deleteShiftTime({ variables: { id: this.props.timeId } });

  }
 

  render() {
    return (  
      <div>
        <Mutation 
        mutation={deleteShiftTime}
        refetchQueries={() => {
           return [{
              query: getShiftTimesQuery,
              variables: { scheduleType: this.props.scheduleType }
          }];
        }}         
        > 
        {(deleteShiftTime, { data }) => (

           <Button 
           variant="contained" color="secondary" 
           onClick={ (e) => {this.handleDelete(deleteShiftTime, e)} }> X 
           </Button>
          
        )}
        </Mutation>           


      </div>
    );
  }
}

export default DeleteTime;