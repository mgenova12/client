import React, { Component } from 'react';
import { Query } from 'react-apollo';
import getRolesQuery from '../queries/getRoles';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

export class AddRoles extends Component {
	state = {
		roleIds: []
	}

  handleChange = roleID => event => {
    if (event.target.checked) {
      this.setState({ roleIds: [...this.state.roleIds, roleID] })
    } else {
      var index = this.state.roleIds.indexOf(roleID)
      this.state.roleIds.splice(index, 1);
    }
    
    // var roleIndex = this.state.roles.findIndex(role => role.id === id)
    // let roles = [...this.state.roles]
    // roles[roleIndex].checked = true;
    // this.setState(roles)
  };  

  handleSubmit = id => event => {
    event.preventDefault()
    console.log(id)
    let checkedRoles = this.state.roles.filter(role => role.checked === true)
    checkedRoles.forEach( role => {
      const ids = {
        employee_id: id,
        role_id: role.id
      };

      axios.post( '/api/v1/employee_roles', { employee_role: ids })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })    
    })

  };

  componentDidMount() {
      // axios.get('/api/v1/roles')
      // .then(response => {
      //     this.setState({
      //         roles: response.data
      //     })
      // })
      // .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.roleIds)
    return (
      <Query
        query={getRolesQuery}
      >
      {({ loading, error, data }) => { 
        if (loading) return <p>Loading...</p>;
        if (error) return <p>ERROR</p>;
        
        return(
          <div>
            <form onSubmit={this.handleSubmit(this.props.employeeId)}>
              <Grid container justify = "center">
                <FormGroup row>

                {data.roles.map( role => (
                  <FormControlLabel key={role.id} control={ <Switch onChange={this.handleChange(role.id)} /> } label={role.title} />
                ))}

                </FormGroup>
              </Grid>
              <Button type='submit' variant="contained" color="primary"> Add Employee </Button>
            </form>
          </div>
        )
      }}
      </Query>
    );
  }
}

export default AddRoles;

