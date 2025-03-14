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
      alert("Your stake is greater than your balance. Try a lower amount or deposit into your balance.");
      return;
    } else if (isNaN(totalBet)) {
      alert("Your bet per reel is null")
      return balance;
    }

    setIsSpinning(true);
    setResult([]);

    setTimeout(() => {
      const spinResult = Array.from({ length: reels }, () =>
        Math.floor(Math.random() * 1)
      );
      setResult(spinResult);

      const isWin = spinResult.every((val) => val === spinResult[0]);
      const payout = isWin ? totalBet * 3 : 0;

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
    }, 2500);
  };

  if (!betPerReel) {
    return null;
  }

  // console.log(navigator.appName)
  // const learnToCode = () => {
  //   return window.open("http://www.w3schools.com")
  // }

  return (
    <div className="slot-machine">
      <h3>SLOT MACHINE</h3>
      <div className="stake-container">
        <div className="stake">
          <span className="stake-title">Stake: </span>
          <span className="total-stake">$ {reels * betPerReel}</span>
        </div>
        <div className="payout">
          <span className="payout-title">Possible Payout: </span>
          <span total-payout>$ {reels * betPerReel * 3}</span>
        </div>
      </div>
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
