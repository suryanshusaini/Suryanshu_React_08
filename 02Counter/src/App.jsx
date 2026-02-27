import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 5;
  const addValue = () => {
    // console.log("clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter > 0 ? counter - 1 : counter);
  };
  return (
    <>
      <h1>Suryanshu</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;

// below code had some issue in updating the counter in main ui whihc react controls so to resolve that we will use reacts hooks in the above part
// function App() {
//   let counter = 5;
//   const addValue = () => {
//     console.log("clicked", counter);
//     counter = counter + 1;
//   };
//   return (
//     <>
//       <h1>Suryanshu</h1>
//       <h2>Counter value : {counter}</h2>

//       <button onClick={addValue}>Add Value</button>
//       <br />
//       <button>Remove Value</button>
//     </>
//   );
// }
