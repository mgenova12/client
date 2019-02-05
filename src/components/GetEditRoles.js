import React, { Component } from 'react';
import { Query } from 'react-apollo';
import getRolesQuery from '../queries/getRoles';
import SelectEditRoles from './SelectEditRoles'

import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';

export class GetEditRoles extends Component {
  
 
  render() {
    return (
      <div>
        <Query
          query={getRolesQuery}
        >
        {({ loading, error, data }) => { 
          if (loading) return <p>Loading...</p>;
          if (error) return <p>ERROR</p>;
          
          return(
                <Grid container justify = "center" >
                  <FormGroup row>
                  {data.roles.map( role => (
                  	<SelectEditRoles key={role.id} role={role} /> 
                  ))}
                  </FormGroup>
                </Grid>
          )
        }}
        </Query>      	
      </div>
    );
  }
}

export default GetEditRoles;