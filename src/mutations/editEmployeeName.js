import gql from 'graphql-tag';

export default gql`
  mutation editEmployeeName($employeeId: Int!, $name: String!) {
    editEmployeeName(input: { employeeId: $employeeId, name: $name}) {
      employee {
        name
      }
    }
  }
`;