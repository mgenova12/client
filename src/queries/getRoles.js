import gql from 'graphql-tag';

export default gql`
  {
    roles {
      id
      title
      checked
    }
  }
`;