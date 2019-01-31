import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable'
import AddEmployee from './AddEmployee'

export class EmployeeSetup extends Component {
  
 

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