import gql from 'graphql-tag';

export default gql`
  query finalSchedule($savedScheduleId: ID!, $day: String!, $timeOfDay: String!, $roleId: ID!) {   
    finalSchedule(savedScheduleId: $savedScheduleId, day: $day, timeOfDay: $timeOfDay, roleId: $roleId) {
      id
      employee {
        name
      }
      shiftTime {
        startTime
        endTime
      }
    }
  
  }
`;