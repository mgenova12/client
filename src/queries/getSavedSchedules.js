import gql from 'graphql-tag';

export default gql`
  {
    savedSchedules {
      id
      createdAt
    }
  }
`;