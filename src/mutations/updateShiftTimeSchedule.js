import gql from 'graphql-tag';

export default gql`
  mutation updateShiftTimeSchedule($id: ID!, $shiftTimeId: ID!) {
    updateShiftTimeSchedule(input: {id: $id, shiftTimeId: $shiftTimeId }) {
      schedule {
        id       
      }
    }
  }
`;