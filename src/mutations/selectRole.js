import gql from 'graphql-tag';

export default gql`
  mutation selectRole($checked: Boolean!) {
    selectRole(input: {checked: $checked }) {
      role {
        id
        checked
      }
    }
  }
`;