import { useState } from "react";
import Button from "./Button";

function SplitBill({selectdFriend,onSplitBill}) {
  const [bill,setBill] = useState("");
  const [paidByUser,setPaidByUser] = useState("");
  const paidByFriend = bill - paidByUser;
  const [whoIsPaying,setWhoIsPaying] = useState("user");
  function handleSubmit(e){
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
    
  }
    return(
        <form className="form-split-bill" onSubmit={handleSubmit}>
          <h2>SPLIT A BILL WITH {selectdFriend.name}</h2>
          <label>💰 Bill value</label>
          <input type="text" value={bill} onChange={(e) => {setBill(Number(e.target.value))}}/>
          <label>🧍‍♂️Your expense</label>
          <input type="text" value={paidByUser} onChange={(e) => {setPaidByUser(Number(e.target.value) > bill ? bill : Number(e.target.value))}}/>
          <label>🧑‍🤝‍🧑 {selectdFriend.name}'s expense</label>
          <input type="text" disabled value={paidByFriend}/>
          <label>🤑 Who is paying the bill?</label>
          <select defaultValue={"You"} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectdFriend.name}</option>
          </select>
          <Button>Split bill</Button>
      </form>
    )
}
export default SplitBill;