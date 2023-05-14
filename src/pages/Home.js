import React from "react";
import LoginButton from "../components/LoginButton";

import { uploadJson } from "../components/upload";
import {
  ContentFocus,
  ProfileOwnedByMe,
  useActiveWallet,
  useActiveProfile,
  useCreatePost,
  useExploreProfiles,
} from "@lens-protocol/react-web";
import style from "../components/Home.module.css";
import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";
import Posts from "../components/Posts";

import Loggin from "../components/Loggin";
async function upload(content) {
  const data = await uploadJson(content);
  return data;
}

const Home = () => {
  const { data: publisher, loading, error: profileError } = useActiveProfile();

  if (loading) {
    return <p>Loading...</p>;
  }

  return <Compose publisher={publisher} />;
};

function Compose({ publisher }) {
  const {
    execute: create,
    error,
    isPending,
  } = useCreatePost({ publisher, upload });
  const { data: wallet, loading: walletLoading } = useActiveWallet();

  const onSubmit = async () => {
    await create({
      content: "Hello World from app",
      contentFocus: ContentFocus.TEXT,
      locale: "en",
    });
  };
  if (wallet) {
    console.log(wallet);
    return (
      /* { <div>
        <LogoutButton />
        <p>You are logged-in with {wallet.address}</p>
        <button onClick={onSubmit}>save</button>
      </div> }*/
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.titles}>
            <h1>SHARE YOUR KNOWLEDGE</h1>
            <h4>And profit by helping others</h4>
          </div>
        </div>

        <div className={style.menu}>
          <Menu />
        </div>

        <div className={style.content}>
          <Posts />
        </div>

        <div className={style.sidebar}>
          <Sidebar />
        </div>
      </div>
    );
  }

  return <Loggin />;
}

export default Home;
