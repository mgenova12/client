import gql from 'graphql-tag';

export default gql`
  mutation deleteShiftTime($id: ID!) {
    deleteShiftTime(input: {id: $id}) {
      errors
    }
  }
`;