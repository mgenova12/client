import React, { Component } from 'react';

import DeleteTime from './DeleteTime'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

export class TimeRow extends Component {


  render() {
    return (
    	<TableBody>
           {this.props.shiftTimes.map( shiftTime => (

          	<TableRow key={shiftTime.id} >
              <TableCell><p>{ new Date(`2019-12-17T${shiftTime.time}`).toLocaleTimeString('en-US') }</p></TableCell>
              <TableCell> <DeleteTime timeId={shiftTime.id}/> </TableCell>

            </TableRow>


          ))}
		</TableBody>
    );
  }
}

export default TimeRow;