import React from "react";

const ResultDisplay = ({ balance }) => {
  return (
    <div className="result-display">
      <h3>STATUS</h3>
      {balance > 0 ? (
        <span>Keep playing? Balance: ${balance}</span>
      ) : (
        <span>No balance left.</span>
      )}
    </div>
  );
};

export default ResultDisplay;
