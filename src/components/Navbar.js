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
        <div className={style.account}>
          <Wallet className={style.balance} address={wallet.address} />
          <p>{wallet.address}</p>
          <LogoutButton />
        </div>
      </nav>
    );
  }

  return;
}
