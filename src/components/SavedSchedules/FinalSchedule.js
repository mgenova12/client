import React, { Component } from 'react';

import { Query } from 'react-apollo';
import getRolesQuery from '../../queries/getRoles';

import FinalScheduleMorningCell from './FinalScheduleMorningCell'

import Table from 'react-bootstrap/Table';

export class FinalSchedule extends Component {


  render() {
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
						        <th>Monday</th>
						        <th>Tuesday</th>
						        <th>Wednesday</th>
						        <th>Thursday</th>
						        <th>Friday</th>
						        <th>Saturday</th>
						    </tr>
						  </thead>
						  <tbody>
						  	
							  <FinalScheduleMorningCell day={"Name"} roleId={role.id} /> 
							  
							  <FinalScheduleMorningCell day={"Monday"}  roleId={role.id}/>  
							  <FinalScheduleMorningCell day={"Tuesday"} roleId={role.id}/>  
							  <FinalScheduleMorningCell day={"Wednesday"} roleId={role.id}/>  
							  <FinalScheduleMorningCell day={"Thursday"} roleId={role.id}/>  
							  <FinalScheduleMorningCell day={"Friday"} roleId={role.id}/>  
							  <FinalScheduleMorningCell day={"Saturday"} roleId={role.id}/>  
							 
				 		  </tbody>		  						
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