import gql from 'graphql-tag';

export default gql`
  mutation selectRole($id: Int!, $checked: Boolean!) {
    selectRole(input: {id: $id, checked: $checked }) {
      role {
        id
        checked
      }
    }
  }
`;