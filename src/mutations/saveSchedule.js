import gql from 'graphql-tag';

export default gql`
  mutation saveSchedule {
    saveSchedule(input: { }) {
    	errors
    }
  }
`;