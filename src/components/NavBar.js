import React, { Component } from 'react';
import '../css/NavBar.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import EmployeeSetup from './Employee/EmployeeSetup'

import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Typography from "@material-ui/core/es/Typography/Typography";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";


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

        <MenuItem>
         <Link to={'/employees'} style={{ textDecoration: 'none' }}>
          	<ListItemText primary="Employee Setup" />
         </Link>
        </MenuItem>

        <MenuItem>
          <ListItemText primary="Scheduler" />
        </MenuItem>

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
      </div>
      </Router>
    );
  }
}

export default NavBar;