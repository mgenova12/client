import React, { Component } from 'react';
import '../css/NavBar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export class NavBar extends Component {
  render() {
    return (
	    <div className="root">
	      <AppBar position="static">
	        <Toolbar>
	          <IconButton className="menuButton" color="inherit" aria-label="Menu">
	            <MenuIcon />
	          </IconButton>
	          <Typography variant="h6" color="inherit" className="grow">
	          	Shift Scheduler
	          </Typography>
	          <Button color="inherit">Login</Button>
	        </Toolbar>
	      </AppBar>
	      
	    </div>
    );
  }
}

export default NavBar;