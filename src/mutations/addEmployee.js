import gql from 'graphql-tag';

export default gql`
  mutation createEmployee($name: String!) {
    createEmployee(name: $name) {
      employee {
        id
        name
      }
    }
  }
`;