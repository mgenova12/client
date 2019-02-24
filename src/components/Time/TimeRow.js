import React, { Component } from 'react';

import DeleteTime from './DeleteTime'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Moment from 'react-moment';

export class TimeRow extends Component {


  render() {
    return (
    	<TableBody>
           {this.props.shiftTimes.map( shiftTime => (

          	<TableRow key={shiftTime.id} >
            
              <TableCell>
                <span><Moment utc format="hh:mma">{shiftTime.startTime}</Moment></span> 
                <span> To </span> 
                <span><Moment utc format="hh:mma">{shiftTime.endTime}</Moment></span>
              </TableCell>
              <TableCell> <DeleteTime timeId={shiftTime.id}/> </TableCell>

            </TableRow>


          ))}
		</TableBody>
    );
  }
}

export default TimeRow;