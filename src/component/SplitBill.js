import Button from "./Button";

function SplitBill({selectdFriend}) {
    return(
        <form className="form-split-bill">
          <h2>SPLIT A BILL WITH {selectdFriend.name}</h2>
          <label>💰 Bill value</label>
          <input type="text" />
          <label>🧍‍♂️Your expense</label>
          <input type="text" />
          <label>🧑‍🤝‍🧑 {selectdFriend.name}'s expense</label>
          <input type="text" disabled />
          <label>🤑 Who is paying the bill?</label>
          <select defaultValue={"You"}>
            <option value="You">You</option>
            <option value="friend">{selectdFriend.name}</option>
          </select>
          <Button>Split bill</Button>
      </form>
    )
}
export default SplitBill;