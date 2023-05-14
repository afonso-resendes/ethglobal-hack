import React from "react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import {uploadJson} from "../components/upload";
import {
  ContentFocus, ProfileOwnedByMe,useActiveWallet, useActiveProfile, useCreatePost, useExploreProfiles
} from '@lens-protocol/react-web';

async function upload(content) {
  const data = await uploadJson(content)
  return data
}

const Home = () => {
  const { data: publisher, loading, error: profileError } = useActiveProfile()

  if (loading) {
    return <p>Loading...</p>;
  }

  return <Compose publisher={publisher} />
};

function Compose ({ publisher }) {
  const { execute: create, error, isPending } = useCreatePost({ publisher, upload });
  const { data: wallet, loading: walletLoading } = useActiveWallet();

  const onSubmit = async () => {
    await create({
      content: "Hello World from app",
      contentFocus: ContentFocus.TEXT,
      locale: 'en',
    });
    
  };
  if (wallet) {
    console.log(wallet);
    return (
      <div>
        <LogoutButton />
        <p>You are logged-in with {wallet.address}</p>
        <button onClick={onSubmit}>save</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Homes</h1>
      <LoginButton />
      <p>You are logged-out</p>
    </div>
  );
}

export default Home;
