import gql from 'graphql-tag';

export default gql`
  {
	employees {
		id
		name
    	roles {
    		id
      		title
    	}
  	}
  }
`;