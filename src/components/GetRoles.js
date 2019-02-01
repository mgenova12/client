import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import resetRoles from '../mutations/resetRoles'
import getRolesQuery from '../queries/getRoles';
import SelectRoles from './SelectRoles'
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';

import Grow from '@material-ui/core/Grow';

export class GetRoles extends Component {
    

  handleSave = resetRoles => {
    resetRoles({ variables: {  } });
  }

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
                  <Grow in={true}>
                  <FormGroup row>
                  {data.roles.map( role => (
                  	<SelectRoles key={role.id} role={role} employeeId={this.props.employeeId} /> 
                  ))}
                  </FormGroup>
                  </Grow>
                </Grid>
          )
        }}
        </Query>

        <Mutation 
        mutation={resetRoles}
        refetchQueries={() => {
           return [{
              query: getRolesQuery
          }];
        }}         
        >  
          {(resetRoles, { data }) => (
            <Button variant="contained" color="primary" onClick={ () => { this.handleSave(resetRoles) } }>Save Employee</Button>
         
          )}
          </Mutation>  

      </div>
    );
  }
}

export default GetRoles;