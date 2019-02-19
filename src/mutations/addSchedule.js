import gql from 'graphql-tag';

export default gql`
  mutation createSchedule($day: String!, $timeOfDay: String!, $scheduleType: String!) {
    createSchedule(input: { day: $day, timeOfDay: $timeOfDay, scheduleType: $scheduleType }) {
      schedule {
        id
        timeOfDay
        day
        scheduleType
      }
    }
  }
`;