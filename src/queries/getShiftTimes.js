import gql from 'graphql-tag';

export default gql`
  {
	shiftTimes{
		id
		startTime
		endTime
  	}
  }
`;