import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import EmployeeSetup from './components/EmployeeSetup'
import NavBar from './components/NavBar'

// EmployeeSetup => AddEmployee => SelectRoles => EmployeeTable => EmployeeRow


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
              <Link to={'/employees'}>
                Link!!!
              </Link>

              <Route path="/employees" component={EmployeeSetup}/>
        </div>
      </Router>
    );
  }
}

export default App;
