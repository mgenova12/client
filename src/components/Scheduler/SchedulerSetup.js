import React, { Component } from 'react';

import Morning from './Morning'
import Afternoon from './Afternoon'


import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export class SchedulerSetup extends Component {
  state = {
    age: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Pizza</MenuItem>
            <MenuItem value={20}>Cook</MenuItem>
            <MenuItem value={30}>Wait Staff</MenuItem>
          </Select>
        </FormControl>

        <Morning/>
        <Afternoon/>
      </div>
    );
  }
}

export default SchedulerSetup;