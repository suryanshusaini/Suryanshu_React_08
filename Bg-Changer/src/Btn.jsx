function Btn({ color, onColorChange }) {
  return (
    <>
      <button
        onClick={() => onColorChange(color)} // actually on click demand fuction not value that why we have used ()=> the change color
        style={{
          backgroundColor: color,
          padding: "10px 20px",
          margin: "5px",
          color: color === "black" ? "white" : "black",
        }}
      >
        {color}
      </button>
    </>
  );
}

export default Btn;
