import React, { Component } from 'react';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

export class AddShift extends Component {

	state = {
		columnData: []
	}


	addColumn = (event) => {
		// event.stopPropagation()
		event.preventDefault()
  		console.log(this.props.day)
  		console.log(this.props.timeOfDay)
	}

  render() {

    return (
    	<tr className='invert'>
	      	<td>
		        <Fab onClick={(e) => this.addColumn(e)} 
		        	className="fab" size="small" color="primary" aria-label="Add">
		          <AddIcon/>
		        </Fab>
	      	</td>
      	</tr>
    );
  }
}

export default AddShift;