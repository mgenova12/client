import gql from 'graphql-tag';

export default gql`
  mutation createEmployee($name: String!) {
    createEmployee(input: { name: $name}) {
      employee {
        id
        name
      }
    }
  }
`;