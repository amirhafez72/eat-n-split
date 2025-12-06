import { useState } from "react";
import FriendsList from "./component/FriendsList.js";
import AddFriend from "./component/AddFriend.js";
import SplitBill from "./component/SplitBill.js";
import Button from "./component/Button.js";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends,setFriends] = useState(initialFriends)
  const [showFormAddFriend,setShowFormAddFriend] = useState(false);
  const [selectdFriend,setSelectdFriend] = useState(null);

  function showAddFriend(){
    setShowFormAddFriend((show) => !show);
    setSelectdFriend(null);
  }
  function handlAddFriend(friend){
    setFriends((friends) => [...friends, friend]);
    setShowFormAddFriend(false);
  }
  function handleShowSplitBill(friend) {
    setSelectdFriend((cur) => {
     return cur?.id === friend.id ? null : friend
    });
    setShowFormAddFriend(false);
  }
  return(
    <div className="app">
      <div className="sidebar">
        <FriendsList initialFriends={friends} onShowSplitBill={handleShowSplitBill} selectdFriend={selectdFriend} />
        {
          showFormAddFriend && <AddFriend  onAddFriend={handlAddFriend}/>
        }
        <Button handleClickButton={showAddFriend}>{showFormAddFriend ? 'Close' : 'Add friend'}</Button> 
      </div>
      {selectdFriend && <SplitBill selectdFriend={selectdFriend} />}
    </div>
  )
}
export default App;