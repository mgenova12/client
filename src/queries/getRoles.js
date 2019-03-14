import gql from 'graphql-tag';

export default gql`
  {
    roles {
      id
      title
      checked
      employees {
      	id 
      	name	
      }  
	  schedules {
	    savedScheduleId
	    timeOfDay
	    day
	      employee {
	      	id 
	      	name	
	      }	    
	  }        
    }
  }
`;