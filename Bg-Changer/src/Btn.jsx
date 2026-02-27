function Btn({ color, onColorChange }) {
  return (
    <>
      <button
        onClick={() => onColorChange(color)}
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
