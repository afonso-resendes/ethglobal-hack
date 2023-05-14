import { useState } from "react";

export default function () {
  const [walletAdress, setWalletAdress] = useState("0x000000000000000000");

  async function requestAccount() {
    console.log("requestAccount");

    if (window.ethereum) {
      console.log("detected ethereum");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("accounts", accounts);
        setWalletAdress(accounts[0]);
      } catch (err) {
        console.log("err", err);
      }
    } else {
      console.log("not detected ethereum");
    }

    //await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  return (
    <div>
      <button onClick={requestAccount}>Connect Wallet</button>
      <h3>Wallet Adress: {walletAdress}</h3>
    </div>
  );
}
