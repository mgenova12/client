import gql from 'graphql-tag';

export default gql`
  query finalSchedule($savedScheduleId: ID!, $day: String!, $timeOfDay: String!, $roleId: ID!, $employeeId: ID!) {   
    finalSchedule(savedScheduleId: $savedScheduleId, day: $day, timeOfDay: $timeOfDay, roleId: $roleId, employeeId: $employeeId) {
      id
      day
      shiftTime {
        id
        startTime
        endTime
      }
    }
  
  }
`;