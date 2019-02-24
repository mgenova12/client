import gql from 'graphql-tag';

export default gql`
  mutation createShiftTime($startTime: String!, $endTime: String!) {
    createShiftTime(input: { startTime: $startTime, endTime: $endTime}) {
      shiftTime {
	      id
	      startTime
	      endTime
      }
    }
  }
`;