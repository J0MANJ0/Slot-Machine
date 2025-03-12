import React from "react";

const BetControls = ({
  reels,
  setReels,
  betPerReel,
  setBetPerReel,
  balance,
}) => {
  return (
    <div className="bet-controls">
      <h3>BET SETTINGS</h3>
      <label>
        Number of Reels:
        <select
          value={reels}
          onChange={(e) => setReels(parseInt(e.target.value))}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
        </select>
      </label>
      <label>
        Bet Per Reel ($):
        <input
          type="number"
          value={betPerReel}
          onChange={(e) => setBetPerReel(parseInt(e.target.value))}
          min={1}
          max={balance}
          required
        />
      </label>
    </div>
  );
};

export default BetControls;
