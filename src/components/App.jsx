import user from '../data/user';
import { Profile } from './Profiles/Profile';
import friends from '../data/friends';
import { FriendList } from './Friends/FriendList/FriendList';
import data from '../data/data';
import { Statistics } from './Statistics/Statistics';
import transaction from '../data/transactions';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { Container } from './App.styled';



export const App = () => {
	return (
		<Container>
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics title="Upload stats" stats={data} />
			<FriendList friends={friends} />
			<TransactionHistory items={transaction} />
		</Container>
	);
};
