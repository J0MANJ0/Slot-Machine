import React, { useState } from "react";

const SlotMachine = ({
  balance,
  setBalance,
  reels,
  betPerReel,
  setWins,
  setLosses,
}) => {
  const [result, setResult] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinReels = () => {
    const totalBet = reels * betPerReel;
    if (totalBet > balance) {
      alert("Insufficient balance!! Kindly deposit into your balance");
      return;
    }

    setIsSpinning(true);
    setResult([]);

    setTimeout(() => {
      const spinResult = Array.from({ length: reels }, () =>
        Math.floor(Math.random() * 2)
      );
      setResult(spinResult);

      const isWin = spinResult.every((val) => val === spinResult[0]);
      const payout = isWin ? totalBet * 2 : 0;

      setBalance(balance - (totalBet + payout));
      if (isWin) {
        setBalance(balance + payout);
      }
      if (isWin) {
        alert(`Congratulations you have won $${payout}`);
        setWins((prev) => prev + payout);
        setIsSpinning(true);
      } else {
        setLosses((prev) => prev + totalBet);
      }
      setIsSpinning(false);
    }, 1500);
  };
  return (
    <div className="slot-machine">
      <h3>SLOT MACHINE</h3>
      <button onClick={spinReels} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin"}
      </button>
      <div className="reels-container">
        {result.length > 0
          ? result.map((num, i) => (
            <div key={i} className={`reel ${isSpinning ? "" : "stopped"}`}>
              {num}
            </div>
          ))
          : Array.from({ length: reels }).map((_, i) => (
            <div key={i} className={`reel ${isSpinning ? "" : "stopped"}`}>
              {isSpinning ? "$" : "-"}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SlotMachine;
