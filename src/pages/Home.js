import React from "react";

import Dashbord from "./Dashbord";
import Post from "./Post";
import Loggin from "../components/Loggin";

import style from "../style/Home.module.css";


import { uploadJson } from "../components/upload";

import {
  ContentFocus,
  ProfileOwnedByMe,
  useActiveWallet,
  useActiveProfile,
  useCreatePost,
  useExploreProfiles,
} from "@lens-protocol/react-web";

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
  const [homeScreen, setHomeScreen] = React.useState(true);

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
      <div className={style.container}>
          {homeScreen ? <Dashbord setHomeScreen={setHomeScreen}/> : <Post setHomeScreen={setHomeScreen}/>}      
      </div>
    );
  }

  return <Loggin />;
}

export default Home;
