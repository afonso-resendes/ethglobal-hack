import React from "react";
import { useExploreProfiles } from "@lens-protocol/react-web";
import LoginButton from "./LoginButton";

const Home = () => {
  const { data, loading } = useExploreProfiles();
  console.log(loading);
  console.log(data);

  return (
    <div>
      <h1>Homes</h1>
      <LoginButton />
    </div>
  );
};

export default Home;
