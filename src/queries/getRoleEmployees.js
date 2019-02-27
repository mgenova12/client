import gql from 'graphql-tag';

export default gql`
  query roleEmployees($id: ID!) {   
    roleEmployees(id: $id) {
      id
      name
    }
	
  }
`;