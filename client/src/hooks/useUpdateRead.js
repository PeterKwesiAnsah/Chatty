import { useSubscription, gql } from '@apollo/client';
import { useEffect } from 'react';
import { updateRead } from '../slices/messages';
import { useDispatch } from 'react-redux';

const UPDATE_READ = gql`
	subscription updateRead($userID: ID!) {
		readUpdate(userID: $userID) {
			id
			messageID
		}
	}
`;

const useUpdateRead = (userID) => {
	const dispatch = useDispatch();

	const { data } = useSubscription(UPDATE_READ, {
		variables: { userID },
	});

	useEffect(() => {
		if (data) {
			const messageInfo = data.readUpdate;
			dispatch(updateRead(messageInfo));
		}
	}, [data]);
};

export default useUpdateRead;
