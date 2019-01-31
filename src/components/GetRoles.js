import React, { Component } from 'react';
import { Query } from 'react-apollo';
import getRolesQuery from '../queries/getRoles';
import SelectRoles from './SelectRoles'
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';

export class GetRoles extends Component {

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
                <Grid container justify = "center">
                  <FormGroup row>
                  {data.roles.map( role => (
                  	<SelectRoles key={role.id} role={role} employeeId={this.props.employeeId} />
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

export default GetRoles;