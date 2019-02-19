import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';

const styles = {
  formControl: {
    margin: 0,
    fullWidth: true,
    display: "flex",
    wrap: "nowrap",
  },
  InputLabel: {
  	color: "white"
  }
};

export class SelectEmployee extends Component {

  render() {
  	const { classes } = this.props;

    return (
    	<div>
       <FormControl className={classes.formControl} variant="filled">
          <InputLabel className={classes.InputLabel}>Employee</InputLabel>
          <Select
          	autoWidth={true}
            // value={this.state.age}
            // onChange={this.handleChange}
            input={<FilledInput name="employee" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </div>
    );
  }
}

export default withStyles(styles)(SelectEmployee);
