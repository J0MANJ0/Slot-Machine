import React, { useState } from "react";

const Deposit = ({ depositMoney }) => {
  const [amount, setAmount] = useState("");
  const handleDeposit = () => {
    const deposit = parseFloat(amount);
    if (deposit >= 5) {
      depositMoney(deposit);
      setAmount("");
    } else {
      alert("Minimum deposit is $5");
    }
  };
  return (
    <div className="deposit-container">
      <h2>DEPOSIT MONEY</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amont"
        min={5}
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default Deposit;
