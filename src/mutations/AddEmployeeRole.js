import gql from 'graphql-tag';

export default gql`
  mutation createEmployeeRole($employeeId: Int!, $roleId: Int!) {
    createEmployeeRole(input: { employeeId: $employeeId, roleId: $roleId}) {
      employeeRole {
        id
        roleId
        employeeId
      }
    }
  }
`;