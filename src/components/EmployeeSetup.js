import React, { Component } from 'react';
import AddEmployee from './AddEmployee'
import EmployeeTable from './EmployeeTable'

export class EmployeeSetup extends Component {
  state = {
    employees: []
  }   
 

  render() {
    return (
      <div>
      	<AddEmployee/>
      	<EmployeeTable/>
      </div>
    );
  }
}

export default EmployeeSetup;