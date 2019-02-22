import gql from 'graphql-tag';

export default gql`
  mutation updateEmployeeSchedule($id: ID!, $employeeId: ID!) {
    updateEmployeeSchedule(input: {id: $id, employeeId: $employeeId }) {
      schedule {
        id       
      }
    }
  }
`;