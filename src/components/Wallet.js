import React, { useState, useEffect } from "react";
import Web3 from "web3";

import style from "./Wallet.module.css";

const networkId = 4; // Rinkeby network ID

const rpc = "https://goerli.optimism.io";

async function getWalletBalance(walletAddress) {
  try {
    const web3 = new Web3(rpc);
    const balanceWei = await web3.eth.getBalance(walletAddress);
    const balanceEther = web3.utils.fromWei(balanceWei, "ether");
    return balanceEther;
  } catch (error) {
    console.error(error);
    throw new Error("Could not connect to Ethereum wallet");
  }
}

export default function Wallet({ address }) {
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const newBalance = await getWalletBalance(address);
        setBalance(newBalance);
      } catch (error) {
        console.error(error);
        setBalance("4");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h4 className={style.balance}>{balance}ETH</h4>
    </div>
  );
}
