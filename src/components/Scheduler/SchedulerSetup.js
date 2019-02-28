import React, { Component } from 'react';

import { Query } from 'react-apollo';
import getRolesQuery from '../../queries/getRoles';

import { Mutation } from 'react-apollo';
import saveSchedule from '../../mutations/saveSchedule';

import Morning from './Morning'
import Afternoon from './Afternoon'

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export class SchedulerSetup extends Component {
  state = {
    scheduleType: '',
    roleId: '',
    open: false
  };

  handleChange = event => {
    this.setState({ scheduleType: event.target.value.title, roleId: event.target.value.Id });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleSaveSchedule = (e, saveSchedule) => {
    saveSchedule({ variables: {  } });
  }

  render() {
    return (
      <div>
          <Mutation 
            mutation={saveSchedule}                   
            >
              {(saveSchedule, { data }) => ( 
              <Button 
                style={{ backgroundColor: "green"}} 
                variant="contained" 
                className="savedButton" 
                size={'small'}
                onClick={(e) => this.handleSaveSchedule(e, saveSchedule)}>
                Save!
              </Button> 
              )}
          </Mutation>              
           
        <Button size={'large'} onClick={this.handleOpen} style={{color: 'white'}}>
          Schedule For
        </Button>
        <FormControl>

          <Query
            query={getRolesQuery}
          >
          {({ loading, error, data }) => { 
            if (loading) return <p>Loading...</p>;
            if (error) return <p>ERROR</p>;
            
            return(
              <Select
                open={this.state.open}
                onClose={() => this.handleClose()}
                onOpen={() => this.handleOpen()}
                value={this.state.scheduleType}
                renderValue={value => `${value}`}
                onChange={(e) => this.handleChange(e)}
              >
                {data.roles.map( role => (
                  <MenuItem key={role.id} value={{title: role.title, Id: role.id}}>{role.title}</MenuItem>
                ))}
              </Select>
            )
          }}
          </Query>   

        </FormControl>

        {this.state.scheduleType &&
          <div> 
            <Morning roleId={this.state.roleId} /> 
            <Afternoon roleId={this.state.roleId} /> 
          </div>
        }
        
      </div>
    );
  }
}

export default SchedulerSetup;