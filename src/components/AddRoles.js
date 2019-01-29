import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import getRolesQuery from '../queries/getRoles';
import addEmployeeRole from '../mutations/addEmployeeRole'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

export class AddRoles extends Component {
	state = {
		roleIds: []
	}

  handleChange = roleId => event => {
    if (event.target.checked) {
      this.setState({ roleIds: [...this.state.roleIds, roleId] })
    } else {
      var index = this.state.roleIds.indexOf(roleId)
      this.state.roleIds.splice(index, 1);
    }
  };  

  handleSubmit = (employeeId, addEmployeeRole) => event => {
    event.preventDefault()

    this.state.roleIds.forEach(roleId => (
      addEmployeeRole({ variables: { employeeId: parseInt(employeeId), roleId: parseInt(roleId) } })
    ))

  };


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
            <div>
                <Grid container justify = "center">
                  <FormGroup row>

                  {data.roles.map( role => (
                    <FormControlLabel key={role.id} control={ <Switch onChange={this.handleChange(role.id)} /> } label={role.title} />
                  ))}

                  </FormGroup>
                </Grid>
            </div>
          )
        }}
        </Query>

        <Mutation mutation={addEmployeeRole}>
          {(addEmployeeRole, { data }) => ( 
            <form 
            onSubmit={ this.handleSubmit(this.props.employeeId, addEmployeeRole ) }
            >
              <Button type='submit' variant="contained" color="primary"> Add Employee </Button>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default AddRoles;

