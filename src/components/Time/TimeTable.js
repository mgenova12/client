import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Query } from 'react-apollo';
import getShiftTimesQuery from '../../queries/getShiftTimes';

import TimeRow from './TimeRow'

export class TimeTable extends Component {


  render() {
    return (
      <div>
        <Query
          query={getShiftTimesQuery}
        >
        {({ loading, error, data }) => { 
          if (loading) return <p>Loading...</p>;
          if (error) return <p>ERROR</p>;
          
          return(

	       <Table>
	        <TableHead>
	          <TableRow>
	            <TableCell><p>Times</p></TableCell>
            	<TableCell><p>Delete</p></TableCell>
	          </TableRow>
	        </TableHead>

	        	<TimeRow shiftTimes={data.shiftTimes}/>

	      </Table>
          )
        }}
        </Query>	      
      </div>
    );
  }
}

export default TimeTable;