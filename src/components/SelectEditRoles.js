import React, { Component } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export class SelectEditRoles extends Component {
  


  render() {
  	console.log(this.props.checked)
    return (
      <div>
        <FormControlLabel 
        key={this.props.role.id} 
        control={ 
          <Switch /> 
        } 
        label={this.props.role.title} />      	
      </div>
    );
  }
}

export default SelectEditRoles;