import gql from 'graphql-tag';

export default gql`
  mutation resetRoles {
    resetRoles(input: { }) {
    	errors
    }
  }
`;