import React from "react";
import style from "./Loggin.module.css";
import LoginButton from "./LoginButton";

export default function Loggin() {
  function connectLens() {
    console.log("connectLens");
  }

  return (
    <div className={style.container}>
      <div className={style.form}>
        <h4 className={style.title}>Log to your lens account</h4>

        <LoginButton />
      </div>
    </div>
  );
}
