import React from "react";
import style from "./Navbar.module.css";
import Wallet from "./Wallet";
import LogoutButton from "../components/LogoutButton";

import {
  ContentFocus,
  ProfileOwnedByMe,
  useActiveWallet,
  useActiveProfile,
  useCreatePost,
  useExploreProfiles,
} from "@lens-protocol/react-web";
export default function Navbar() {
  const { data: wallet, loading: walletLoading } = useActiveWallet();
  if (wallet) {
    return (
      <nav className={style.navbar}>
        <h1 className={style.title}>SolvETH</h1>
        <div>
          <input type="text" className={style.search} placeholder="Search..."/>
        </div>
        <div className={style.account}>
          <p>{wallet.address}</p>
          <Wallet className={style.balance} address={wallet.address} />
          <LogoutButton />
        </div>
      </nav>
    );
  }

  return;
}
