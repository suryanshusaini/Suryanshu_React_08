import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https.//google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
n; /* 
-> don't just do it but it will work
-> you can also use MyApp() because at the end it is  function only  */

/*
-> react uses bundler which is working behind the scene like syntax
-> we have seen two ways one is directly return the the html form the function or create your own react but in html part firstly it is parsing isko convert krte hai tree form mai.

=> ----------------------------------------------------
   | NOTE : there will one doubt in our mind that why we are not using object directly when we have o conver function i mean parsing it into that object so the reson is that we cannot call object like we call fucntion while rendering
   ----------------------------------------------------------
  -> plus for my own react i am also written custom render functio n
   */
