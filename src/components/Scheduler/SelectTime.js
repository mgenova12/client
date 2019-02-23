import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";

import { Query } from 'react-apollo';
import getShiftTimesQuery from '../../queries/getShiftTimes';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import AddShiftTime from './AddShiftTime'

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

export class SelectTime extends Component {
  render() {
    const { classes } = this.props;

    return (
       <FormControl className={classes.formControl} variant="filled">
          <InputLabel className={classes.InputLabel}>Time</InputLabel>
    
          <Query
            query={getShiftTimesQuery}
          >
          {({ loading, error, data }) => { 
            if (loading) return <p>Loading...</p>;
            if (error) return <p>ERROR</p>;
            
            return(
              <AddShiftTime 
                timeOfDay={this.props.timeOfDay} 
                shiftTimes={data.shiftTimes} 
                scheduleId={this.props.scheduleId}
                scheduleType={this.props.scheduleType}
                shiftTime={this.props.shiftTime}
              />
            )
          }}
          </Query>  

        </FormControl>
    );
  }
}

export default withStyles(styles)(SelectTime);
