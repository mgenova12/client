import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import getRolesQuery from '../queries/getRoles';
import addEmployeeRole from '../mutations/addEmployeeRole'

// import selectRole from '../mutations/selectRole'

import getEmployeeRolesQuery from '../queries/getEmployeeRoles';
import EmployeeTable from './EmployeeTable'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

export class AddRoles extends Component {
	state = {
		roleIds: [],
    checked: true
	}

  handleChange = (role, addEmployeeRole, employeeId) => event => {

    if(event.target.checked) {
      addEmployeeRole({ variables: { employeeId: parseInt(employeeId), roleId: parseInt(role.id) } })
      this.setState({ roleIds: [...this.state.roleIds, role.id]})
    } else {
      var index = this.state.roleIds.indexOf(role.id)
      this.state.roleIds.splice(index, 1);
    }
    console.log(role.checked)

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
                  <FormGroup row >

                  {data.roles.map( role => (

                  <Mutation 
                  mutation={addEmployeeRole}
                  refetchQueries={() => {
                     return [{
                        query: getEmployeeRolesQuery
                    }];
                  }}
                  >    

                  {(addEmployeeRole, { data }) => (                                    
                    <FormControlLabel 
                    key={role.id} 
                    control={ 
                      <Switch onChange={this.handleChange(role, addEmployeeRole, this.props.employeeId)} /> 
                    } 
                    label={role.title} />
                  )}
                  </Mutation>


                  ))}
                  </FormGroup>
                </Grid>
            </div>
          )
        }}
        </Query>

        <Mutation 
        mutation={addEmployeeRole}
        refetchQueries={() => {
           return [{
              query: getEmployeeRolesQuery
          }];
        }}        
        >
          {(addEmployeeRole, { data }) => ( 
            <form 
            onSubmit={ this.handleSubmit(this.props.employeeId, addEmployeeRole) }
            >
              <Button type='submit' variant="contained" color="primary"> Add Employee </Button>
            </form>
          )}
        </Mutation>

        <EmployeeTable/>
        
      </div>
    );
  }
}

export default AddRoles;

