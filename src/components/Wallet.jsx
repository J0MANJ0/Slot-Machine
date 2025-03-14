import React, { useState } from "react";

const Wallet = ({ loadWallet, pin }) => {
  const [amount, setAmount] = useState("");

  const handleWallet = () => {
    const load = parseFloat(amount);
    if (load >= 100) {
      loadWallet(load);
      setAmount("");
    } else {
      alert("Kindly deposit atleast $100 to load your wallet enough.");
    }
  };

  return (
    <div className="deposit-container">
      <h2>LOAD WALLET</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Load wallet"
        min={100}
      />
      <button onClick={handleWallet}>Load wallet</button>
    </div>
  );
};

export default Wallet;
