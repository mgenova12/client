import gql from 'graphql-tag';

export default gql`
  mutation createShiftTime($time: String!) {
    createShiftTime(input: { time: $time}) {
      shiftTime {
        id
        time
      }
    }
  }
`;