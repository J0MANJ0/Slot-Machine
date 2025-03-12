import React from "react";

const CashOut = ({ cashOut }) => {
  return (
    <div className="cash-out">
      <button onClick={cashOut}>Cash Out</button>
    </div>
  );
};

export default CashOut;
