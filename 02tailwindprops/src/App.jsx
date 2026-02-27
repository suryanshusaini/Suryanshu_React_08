import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Cards";
function App() {
  // let myObj = {
  //   username: "suryanshu saini",
  //   age: 21,
  // };

  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 m-50 rounded-xl">
        Tailwind Test
      </h1>
      {/* <Card channel="practicereact" someObj={myObj} /> */}
      <Card username="surya" price="0.5" />
      <Card username="parker" />
    </>
  );
}

export default App;
