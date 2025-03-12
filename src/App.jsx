import React, { useState } from "react";
import Deposit from "./components/Deposit";
import Wallet from "./components/Wallet";
import SlotMachine from "./components/SlotMachine";
import BetControls from "./components/BetControls";
import ResultDisplay from "./components/ResultDisplay";
import CashOut from "./components/CashOut";
// import NavBar from "./components/NavBar";
// import SetUpPin from "./components/SetUpPin";
import "./App.css";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [reels, setReels] = useState(3);
  const [betPerReel, setBetPerReel] = useState(1);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [wallet, setWallet] = useState(0);

  const depositMoney = (amount) => {
    if (amount > wallet) {
      alert(
        `You can't deposit $${amount} since your wallet balance is $${wallet}`
      );
      return wallet;
    } else if (wallet > 5) {
      setBalance((prev) => prev + amount);
      setWallet((prev) => prev - amount);
    } else {
      alert(
        `It seems your wallet doesn't have atleast $5 to deposit. Your wallet balance is $${wallet}`
      );
    }
  };

  const loadWallet = (load) => {
    setWallet((prev) => prev + load);
  };

  // if (wins > 100 && !losses) {
  //   alert(
  //     `Congratulations you have received $50 bonus. Your wallet balance is $${
  //       wallet + 50
  //     }`
  //   );
  //   setWallet((prev) => prev + 50);
  // }

  const cashOut = () => {
    const cashOutAmount = Number(
      prompt(
        `Cash out Amount: minimum cash out is $50.Your balance $${balance}`
      )
    );

    if (cashOutAmount > balance) {
      alert(
        `Sorry! Your request to cash out $${cashOutAmount} has failed due to insufficient balance. Your current balance is $${balance}.`
      );
    } else if (isNaN(cashOutAmount) || cashOutAmount < 50) {
      alert(
        "Invalid input! Kindly enter a valid amount. Minimum cash out is $50."
      );
    } else if (cashOutAmount > 50000) {
      alert(
        "Sorry! Your maximum cash out amount is limited to $50,000. Try a lower amount."
      );
    } else {
      alert(`Congratulations you have received $${cashOutAmount}.`);
      setBalance((prev) => prev - cashOutAmount);
      setWallet((prev) => prev + cashOutAmount);
    }
    setWins(0);
    setLosses(0);
  };
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <SetUpPin setUpPin={setUpPin} userPin={pin} /> */}
      <h1>SLOT MACHINE GAME</h1>
      <p>
        Balance: <span>${balance}</span>
      </p>
      <p>
        WINS: <span>${wins}</span> | LOSSES: <span>${losses}</span> | PROFIT:{" "}
        <span>${wins - losses}</span> | WALLET: <span>${wallet}</span>
      </p>
      {wallet < 5 ? (
        <Wallet loadWallet={loadWallet} />
      ) : (
        <>
          <BetControls
            reels={reels}
            setReels={setReels}
            betPerReel={betPerReel}
            setBetPerReel={setBetPerReel}
            balance={balance}
          />
          <SlotMachine
            balance={balance}
            setBalance={setBalance}
            reels={reels}
            betPerReel={betPerReel}
            setWins={setWins}
            setLosses={setLosses}
          />
          <ResultDisplay balance={balance} />
          <CashOut cashOut={cashOut} />
          <Deposit depositMoney={depositMoney} />
          <Wallet loadWallet={loadWallet} />
        </>
      )}
    </div>
  );
};

export default App;
