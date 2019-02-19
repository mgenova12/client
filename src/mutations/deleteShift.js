import gql from 'graphql-tag';

export default gql`
  mutation deleteShift($id: ID!) {
    deleteShift(input: {id: $id}) {
      errors
    }
  }
`;