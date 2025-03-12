import React, { useState } from "react";

const Deposit = ({ depositMoney }) => {
  const [amount, setAmount] = useState("");
  const handleDeposit = () => {
    const deposit = parseFloat(amount);
    if (deposit >= 3) {
      depositMoney(deposit);
      setAmount("");
    } else {
      alert("Minimum deposit is $3");
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
        min={3}
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default Deposit;
