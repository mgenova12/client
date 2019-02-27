import gql from 'graphql-tag';

export default gql`
  query schedules($roleId: ID!) {   
    schedules(roleId: $roleId) {
      id
      day
      timeOfDay
	    employee {
	      id
	      name
	    }
      shiftTime {
        id
        startTime
        endTime
      }
      role {
        id
        title
      }                  
    }
	
  }
`;