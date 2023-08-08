import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [quantity, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      quantity: +quantity,
    };
    console.log(newTransaction);
    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlfor="text">Item</label>
          <select
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          >
            <option value="Cold Coffee">Cold Coffee</option>
            <option value="Cold Coffee w Ice Cream">
              Cold Coffee w Ice Cream
            </option>
            <option value="CC Large">CC Large</option>
            <option value="CCwI Large">CCwI Large</option>
            <option value="Oreo Shake">Oreo Shake</option>
            <option value="Cheese Sandwitch">Cheese Sandwitch</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlfor="quantity">
            Quantity <br />
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
