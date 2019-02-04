import gql from 'graphql-tag';

export default gql`
  mutation deleteEmployee($id: ID!) {
    deleteEmployee(input: {id: $id}) {
      errors
    }
  }
`;