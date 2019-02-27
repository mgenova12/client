import gql from 'graphql-tag';

export default gql`
  mutation createSchedule($day: String!, $timeOfDay: String!, $roleId: ID!) {
    createSchedule(input: { day: $day, timeOfDay: $timeOfDay, roleId: $roleId }) {
      schedule {
        id
        timeOfDay
        day
        roleId
      }
    }
  }
`;