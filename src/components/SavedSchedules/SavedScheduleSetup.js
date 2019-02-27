import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import SavedScheduleTable from './SavedScheduleTable'

import FinalSchedule from './FinalSchedule'

export class SavedScheduleSetup extends Component {


  render() {
    return (
      <div>
      	<Route exact path="/saved_schedules/:id" component={FinalSchedule} />
      	<Route exact path="/saved_schedules" component={SavedScheduleTable} />
      </div>
    );
  }
}

export default SavedScheduleSetup;