import React, { Component } from 'react';
import AddTime from './AddTime'
import TimeTable from './TimeTable'



export class TimeSetup extends Component {


  render() {
    return (
      <div>
        <AddTime/>
        <TimeTable/>
      </div>
    );
  }
}

export default TimeSetup;