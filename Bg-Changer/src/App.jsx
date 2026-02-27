import "./App.css";
import Btn from "./Btn.jsx";
import { useState } from "react";
function App() {
  const [bgColor, setBgColor] = useState("white");
  const colors = ["red", "green", "yellow", "gray", "black", "pink"];
  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh" }}>
      <div className="btn-container">
        {colors.map((c) => (
          <Btn color={c} onColorChange={setBgColor} />
        ))}
      </div>
    </div>
  );
}

export default App;
