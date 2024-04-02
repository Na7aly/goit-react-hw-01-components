import PropTypes from "prop-types";
import style from '../FriendList/FriendList.module.css';
import FriendListItem from "../FriendList/FriendList";

function FriendList({ friends }) {
  return (
    <ul className={style["friend-list"]}>
      {friends.map(({ id, ...friend }) => (
        <FriendListItem key={id} {...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired
};

export default FriendList;
