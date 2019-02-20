import gql from 'graphql-tag';

export default gql`
  query roleEmployees($title: String!) {   
    roleEmployees(title: $title) {
      id
      name
    }
	
  }
`;