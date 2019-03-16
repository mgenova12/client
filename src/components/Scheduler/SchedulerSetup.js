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

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export class SchedulerSetup extends Component {
  state = {
    scheduleType: '',
    roleId: '',
    open: false
  };

  constructor(props) {
    super(props);
    this.successNotification = this.successNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  successNotification(title, message, type) {
    this.notificationDOMRef.current.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }  

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
      this.successNotification('Saved!', 'Schedule has been saved!', 'success')
      
  }


  render() {
    return (
      <div>
          <ReactNotification ref={this.notificationDOMRef} />
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
                style={{ color: "#f50057"}}
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