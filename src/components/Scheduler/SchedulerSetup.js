import React, { Component } from 'react';

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
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.scheduleType}
            onChange={this.handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Pizza'}>Pizza</MenuItem>
            <MenuItem value={'Cook'}>Cook</MenuItem>
            <MenuItem value={'Wait Staff'}>Wait Staff</MenuItem>
          </Select>
        </FormControl>

        <Morning scheduleType={this.state.scheduleType} />
        <Afternoon scheduleType={this.state.scheduleType} />
      </div>
    );
  }
}

export default SchedulerSetup;