import user from '../data/user';
import { Profile } from './Profiles/Profile';
// import friends from '../data/friends';
// import data from '../data/data';
// import transaction from '../data/transactions';



export const App = () => {
  return (
    <div>
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
    </div>
  );
};
