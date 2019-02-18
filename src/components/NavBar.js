import React, { Component } from 'react';
import '../css/NavBar.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import EmployeeSetup from './Employee/EmployeeSetup'
import SchedulerSetup from './Scheduler/SchedulerSetup'

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
import Schedule from '@material-ui/icons/Schedule';
import Home from '@material-ui/icons/Home';


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

	        <MenuItem>
	         <ListItemIcon><Home/></ListItemIcon>
	         <Link to={'/'} style={{ textDecoration: 'none' }}>
	          	<ListItemText primary="Home" />
	         </Link>
	        </MenuItem>		
			<Divider/>

	        <MenuItem>
	         <ListItemIcon><Schedule/></ListItemIcon>
	         <Link to={'/scheduler'} style={{ textDecoration: 'none' }}>
	          	<ListItemText primary="Scheduler" />
	         </Link>
	        </MenuItem>		
			<Divider/>
		
	        <MenuItem>
	         <ListItemIcon><AccountCircle/></ListItemIcon>
	         <Link to={'/employees'} style={{ textDecoration: 'none' }}>
	          	<ListItemText primary="Employee Setup" />
	         </Link>
	        </MenuItem>		
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

      </div>
      </Router>
    );
  }
}

export default NavBar;