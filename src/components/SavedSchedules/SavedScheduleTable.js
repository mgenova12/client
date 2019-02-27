import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import SavedScheduleRow from './SavedScheduleRow'

import { Query } from 'react-apollo';
import getSavedSchedulesQuery from '../../queries/getSavedSchedules';

export class SavedScheduleTable extends Component {

  render() {

    return (
      <div>
          <Query
            query={getSavedSchedulesQuery}
          >
          {({ loading, error, data }) => { 
            if (loading) return <p>Loading...</p>;
            if (error) return <p>ERROR</p>;
            
            return(

  		       <Table>
  		        <TableHead>
  		          <TableRow>
  		            <TableCell><p>ID</p></TableCell>
  		            <TableCell><p>Date Saved</p></TableCell>
  	            	<TableCell><p>Week Of</p></TableCell>
  		          </TableRow>
  		        </TableHead>

  	        	<SavedScheduleRow showSavedSchedule={this.showSavedSchedule} savedSchedules={data.savedSchedules} />

  	      	</Table>
            ) 
          }}
          </Query>	
      </div>
    );
  }
}

export default SavedScheduleTable;