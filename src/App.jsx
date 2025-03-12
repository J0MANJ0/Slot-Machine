import React, { useState } from "react";
import Deposit from "./components/Deposit";
import Wallet from "./components/Wallet";
import SlotMachine from "./components/SlotMachine";
import BetControls from "./components/BetControls";
import ResultDisplay from "./components/ResultDisplay";
import CashOut from "./components/CashOut";
import UserProfile from "./components/UserProfile";
import CreatePin from "./components/CreatePin";
import IntroUI from "./components/IntroUI";
import "./App.css";


const App = () => {
  const [balance, setBalance] = useState(0);
  const [reels, setReels] = useState(3);
  const [betPerReel, setBetPerReel] = useState(1);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [userName, setUserName] = useState("")
  const [pin, setPin] = useState(0)
  const [confirmPin, setConfirmPin] = useState(0)
  const [isSubmit, setIsSubmit] = useState(false)


  if (userName === "") {
    const name = prompt("Enter your name: ")
    setUserName(name)
  }

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

  // if (wins - losses > 599 && wins - losses < 601) {
  //   alert(`Congratulations you have received your $50 bonus. Your balance is $${balance + 50}.`)
  // }
  return (
    <div className="App">
      {wallet < 100 ? null : <IntroUI wins={wins} losses={losses} balance={balance} wallet={wallet} />}

      {isSubmit === false ?
        <CreatePin pin={pin} setPin={setPin} confirmPin={confirmPin} setConfirmPin={setConfirmPin} setIsSubmit={setIsSubmit} isSubmit={isSubmit} />
        : null}
      {isSubmit === false ? (
        <>
          <Wallet loadWallet={loadWallet} />
        </>
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
          <UserProfile username={userName} setUsername={setUserName} />
        </>
      )}
    </div>
  );
};

export default App;
