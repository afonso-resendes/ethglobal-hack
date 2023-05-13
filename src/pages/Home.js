import React from "react";
import { useExploreProfiles } from "@lens-protocol/react-web";
import LoginButton from "../components/LoginButton";
import { useActiveWallet } from "@lens-protocol/react-web";
import LogoutButton from "../components/LogoutButton";
/* import uploadJson from "../components/upload"; */

const Home = () => {
  const { data: wallet, loading } = useActiveWallet();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (wallet) {
    console.log(wallet);
    return (
      <div>
        <LogoutButton />
        <p>You are logged-in with {wallet.address}</p>
      </div>
    );
  }

  const metadata = {
    QuestionText: "What is the meaning of life?",
    Deadline: new Date("2023-05-31"),
    Bounty: 100.0,
  };

  /* function upload() {
    uploadJson(metadata)
      .then((url) => {
        console.log("Metadata uploaded:", url);
      })
      .catch((error) => {
        console.error("Failed to upload metadata:", error);
      });
  } */

  return (
    <div>
      <h1>Homes</h1>

      <LoginButton />
      <p>You are logged-out</p>
      {/* <button onClick={() => upload()}>upload</button> */}
    </div>
  );
};

export default Home;
