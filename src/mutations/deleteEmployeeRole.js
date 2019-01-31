import gql from 'graphql-tag';

export default gql`
  mutation deleteEmployeeRole($employeeId: Int!, $roleId: Int!) {
    deleteEmployeeRole(input: { employeeId: $employeeId, roleId: $roleId}) {
      employeeRole {
        id
      }
    }
  }
`;