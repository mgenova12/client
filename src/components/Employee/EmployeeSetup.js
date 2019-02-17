import React, { Component } from 'react';

import AddEmployee from './AddEmployee'
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export class EmployeeSetup extends Component {
  
  constructor(props) {
    super(props);
    this.successNotification = this.successNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  successNotification(title, message, type) {
    this.notificationDOMRef.current.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "top-center",
      animationIn: ["animated", "bounceIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }  
 

  render() {
    return (
      <div>
        <ReactNotification ref={this.notificationDOMRef} />

      	<AddEmployee successNotification={this.successNotification} />
      </div>
    );
  }
}

export default EmployeeSetup;