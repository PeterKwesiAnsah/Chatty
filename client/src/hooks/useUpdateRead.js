import { useSubscription, gql } from '@apollo/client';
import { useDispatch } from 'react-redux';

const UPDATE_READ = gql`
	subscription updateRead($userID: ID!) {
		readUpdate(userID: $userID) {
			id
		}
	}
`;

const useUpdateRead = () => {};

export default useUpdateRead;
