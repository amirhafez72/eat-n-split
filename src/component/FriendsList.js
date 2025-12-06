import Button from "./Button";

function FriendsList({ initialFriends,onShowSplitBill,selectdFriend }) {
    const friends = initialFriends;
     return (
        <ul className="">
            {friends.map((friend) => (
                <Friend friend={friend} key={friend.id} onShowSplitBill={onShowSplitBill} selectdFriend={selectdFriend} />
            ))}
        </ul>
    );
}

function Friend({friend,onShowSplitBill,selectdFriend}) {
  const isSelected = selectdFriend?.id === friend.id;
    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance > 0 && (
              <p className="green">{friend.name} owes you $ {friend.balance}</p>
            )}
            {friend.balance === 0 && (
              <p className="">You and {friend.name} are even</p>
            )}
            {friend.balance < 0 && (
              <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>
            )}
            <Button handleClickButton={() => {onShowSplitBill(friend)}}>{isSelected ? "Close" : "Select"}</Button>
        </li>)
}

export default FriendsList;