import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";

import { Query } from 'react-apollo';
import getRoleEmployeesQuery from '../../queries/getRoleEmployees';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import AddEmployeeShift from './AddEmployeeShift'

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
       <FormControl className={classes.formControl} variant="filled">
          <InputLabel className={classes.InputLabel}>Employee</InputLabel>
    
          <Query
            query={getRoleEmployeesQuery}
            variables={{ title: this.props.scheduleType }}
          >
          {({ loading, error, data }) => { 
            if (loading) return <p>Loading...</p>;
            if (error) return <p>ERROR</p>;
            
            return(
              <AddEmployeeShift 
              employee={this.props.employee} 
              employees={data.roleEmployees}
              scheduleId={this.props.scheduleId}
              scheduleType={this.props.scheduleType}
              />
            )
          }}
          </Query>  

        </FormControl>
    );
  }
}

export default withStyles(styles)(SelectEmployee);
