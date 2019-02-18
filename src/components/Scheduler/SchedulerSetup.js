import React, { Component } from 'react';

import Morning from './Morning'
import Afternoon from './Afternoon'


export class SchedulerSetup extends Component {
  

  render() {
    return (
      <div>
        <Morning/>
        <Afternoon/>

      </div>
    );
  }
}

export default SchedulerSetup;