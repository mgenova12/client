import React, { Component } from 'react';

import { Query } from 'react-apollo';
import getRolesQuery from '../../queries/getRoles';
import getFinalScheduleQuery from '../../queries/getFinalSchedule';

import Table from 'react-bootstrap/Table';

var moment = require('moment')

export class FinalSchedule extends Component {
	
	renderFinalSchedule = (data, day) =>  {
		if (data.finalSchedule[0] === undefined){
			return <th>  </th>
		} else {
			return <th> {moment.utc(data.finalSchedule[0].shiftTime.startTime, 'YYYY-MM-DD HH:mm:ss", "UTC"').format('h:mm')} - {moment.utc(data.finalSchedule[0].shiftTime.endTime, 'YYYY-MM-DD HH:mm:ss", "UTC"').format('h:mm')} </th>
		}
	}

  render() {
  	const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday", "Friday", "Saturday"] 

    return (
      <div>
      	FINAL SCHEDULE
  		ID : {this.props.match.params.id}

          <Query
            query={getRolesQuery}
          >
          {({ loading, error, data }) => { 
            if (loading) return <p>Loading...</p>;
            if (error) return <p>ERROR</p>;
            
            return(		
		        data.roles.map(role => 
							<Table key={role.id} striped bordered>
						      	<thead>
								    <tr>
							      		<th colSpan="7">{role.title}</th>
							      	</tr>
								</thead> 		
								  <thead>
								    <tr>
								        <th></th>
								        {daysOfWeek.map(day => 
								        	<th>{day}</th>
								        )}
								    </tr>
								  </thead>
								  	{role.employees.map(employee => 
									  	<tbody>
										  	<tr key={employee.id}> 
										  		<th>{employee.name}</th>
										  		{daysOfWeek.map(day =>
										        <Query
										          query={getFinalScheduleQuery}
										          variables={{ 
										          	roleId: role.id,
										          	day: day,
										          	savedScheduleId: this.props.match.params.id, 
										          	timeOfDay: 'Morning',
										          	employeeId: employee.id
										          }}
										        >
											        {({ loading, error, data }) => { 
											          if (loading) return <td>Loading...</td>;
											          if (error) return <td>ERROR</td>;
											          return (
											          		this.renderFinalSchedule(data, day)
											          	)
											        }}
										        </Query>
										  		)}
										  	</tr>
										  	
										  	<tr>
										  		<th>-</th>
										  		{daysOfWeek.map(day =>
										        <Query
										          query={getFinalScheduleQuery}
										          variables={{ 
										          	roleId: role.id,
										          	day: day,
										          	savedScheduleId: this.props.match.params.id, 
										          	timeOfDay: 'Afternoon',
										          	employeeId: employee.id
										          }}
										        >
											        {({ loading, error, data }) => { 
											          if (loading) return <td>Loading...</td>;
											          if (error) return <td>ERROR</td>;
											          return (
											          		this.renderFinalSchedule(data, day)
											          	)
											        }}
										        </Query>
										  		)}

										  	</tr>
							 		  	</tbody>		


								  	)}
							</Table>
						)
           )
          }}
          </Query> 				

      </div>
    );
  }
}

export default FinalSchedule;