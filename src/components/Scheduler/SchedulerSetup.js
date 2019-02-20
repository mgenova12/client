import React, { Component } from 'react';

import { Query } from 'react-apollo';
import getRolesQuery from '../../queries/getRoles';

import Morning from './Morning'
import Afternoon from './Afternoon'

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export class SchedulerSetup extends Component {
  state = {
    scheduleType: '',
    open: false
  };

  handleChange = event => {
    this.setState({ scheduleType: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <Button size={'large'} onClick={this.handleOpen}>
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
                onChange={(e) => this.handleChange(e)}
              >
                {data.roles.map( role => (
                  <MenuItem key={role.id} value={role.title}>{role.title}</MenuItem>
                ))}
              </Select>
            )
          }}
          </Query>   

        </FormControl>
        {this.state.scheduleType &&
          <div> 
            <Morning scheduleType={this.state.scheduleType} /> 
            <Afternoon scheduleType={this.state.scheduleType} /> 
          </div>
        }
      </div>
    );
  }
}

export default SchedulerSetup;