import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { Query } from 'react-apollo';
import resetRoles from '../mutations/resetRoles'
import getRolesQuery from '../queries/getRoles';
import SelectEditRoles from './SelectEditRoles'
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import Grow from '@material-ui/core/Grow';



export class GetEditRoles extends Component {


  handleSave = resetRoles => {
    resetRoles({ variables: {  } });
    this.props.edited() 
  
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
                <Grid container justify = "center" >
                  <Grow in={this.props.grow}>
                    <FormGroup row>
                      {data.roles.map( role => (
                  		this.props.roles.some(current_role => current_role.id === role.id) ? (
                  			<SelectEditRoles employeeId={this.props.employeeId} key={role.id} role={role} checked={true}/> 
                  		) : (
                  			<SelectEditRoles employeeId={this.props.employeeId} key={role.id} role={role} checked={false}/> 
    					         )

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
            
            <Button 
            variant="contained" 
            color="primary" 
            onClick={ () => { this.handleSave(resetRoles) } }>Edit Employee
            </Button>

         
          )}
          </Mutation>

      </div>
    );
  }
}

export default GetEditRoles;