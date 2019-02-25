import React, { Component } from 'react';
import '../css/NavBar.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import EmployeeSetup from './Employee/EmployeeSetup'
import SchedulerSetup from './Scheduler/SchedulerSetup'
import TimeSetup from './Time/TimeSetup'
import SavedScheduleSetup from './SavedSchedules/SavedScheduleSetup'

import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Typography from "@material-ui/core/es/Typography/Typography";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Divider from '@material-ui/core/Divider';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Alarm from '@material-ui/icons/Alarm';
import Schedule from '@material-ui/icons/Schedule';
import Home from '@material-ui/icons/Home';
import Save from '@material-ui/icons/Save';


export class NavBar extends Component {

  state = { 
  	drawer: false 
  };

  toggleDrawer(open) {
    // debugger;
    this.setState({
      drawer: open
    });
  }

  render() {
    const drawerMenu = (
      <div>

		<MenuList>

	       <Link to={'/'} style={{ textDecoration: 'none' }}>
          <MenuItem>
           <ListItemIcon><Home/></ListItemIcon>
	          	<ListItemText primary="Home" />
          </MenuItem>   
	       </Link>
			<Divider/>

	       <Link to={'/scheduler'} style={{ textDecoration: 'none' }}>
          <MenuItem>
           <ListItemIcon><Schedule/></ListItemIcon>
	          	<ListItemText primary="Scheduler" />
          </MenuItem>   
	       </Link>
			<Divider/>
		
	       <Link to={'/employees'} style={{ textDecoration: 'none' }}>
          <MenuItem>
           <ListItemIcon><AccountCircle/></ListItemIcon>
	          	<ListItemText primary="Employee Setup" />
          </MenuItem>   
	       </Link>
			<Divider/>
          
         <Link to={'/times'} style={{ textDecoration: 'none' }}>
          <MenuItem>
           <ListItemIcon><Alarm/></ListItemIcon>
              <ListItemText primary="Times" />
          </MenuItem>   
         </Link>
      <Divider/>

         <Link to={'/saved_schedules'} style={{ textDecoration: 'none' }}>
          <MenuItem>
           <ListItemIcon><Save/></ListItemIcon>
              <ListItemText primary="Saved Schedules" />
          </MenuItem>   
         </Link>
      <Divider/>             

		</MenuList>

      </div>
    );

    return (
    <Router>
      <div>

        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => this.toggleDrawer(true)}
              color="inherit"
              aria-label="Menu"
              className="IconButton"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" >
              Shift Scheduler
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          open={this.state.drawer}
          onClose={() => this.toggleDrawer(false)}
          variant="temporary"
          keepMounted={true}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer(false)}
            onKeyDown={() => this.toggleDrawer(false)}
          >
            {drawerMenu}
          </div>
        </Drawer>
      
      <Route path="/employees" component={EmployeeSetup}/>
      <Route path="/scheduler" component={SchedulerSetup}/>
      <Route path="/times" component={TimeSetup}/>
      <Route path="/saved_schedules" component={SavedScheduleSetup}/>

      </div>
      </Router>
    );
  }
}

export default NavBar;