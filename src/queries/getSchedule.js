import gql from 'graphql-tag';

export default gql`
  query schedules($scheduleType: String!) {   
    schedules(scheduleType: $scheduleType) {
      id
      day
      timeOfDay
	    employee {
	      id
	      name
	    }      
    }
	
  }
`;