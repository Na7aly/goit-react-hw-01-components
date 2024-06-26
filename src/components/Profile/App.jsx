
import Profile from './Profile';
import user from '../data/user.json';
import Statistics from '../Statistics/Statistics';
import data from '../data/data.json';
import FriendList from '../FriendList/Item';
import friends from '../data/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  

  return (
    <>
      
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};