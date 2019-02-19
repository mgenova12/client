import gql from 'graphql-tag';

export default gql`
  {
    schedules {
      id
      day
      timeOfDay
    }
  }
`;