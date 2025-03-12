import React from 'react'

const IntroUI = ({ wins, losses, balance, wallet }) => {
    return (
        <>
            <h1>SLOT MACHINE GAME</h1>
            <div className="display-status">
                <p className="display-balance">
                    <span className="balance">BALANCE: </span>$<span className="balance-sum">{balance}</span>
                </p>
                <p className="status">
                    <span className="wins">WINS: </span>$<span className="win-sum">{wins}</span> | <span className="losses">LOSSES: </span>$<span className="loss-sum">{losses}</span> | <span className="profit">PROFIT: </span>
                    $<span className="profit-sum">{wins - losses}</span> | <span className="wallet">WALLET: </span>$<span className="wallet-sum">{wallet}</span>
                </p>
            </div>
        </>
    )
}

export default IntroUI