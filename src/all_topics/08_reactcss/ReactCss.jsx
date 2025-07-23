const ReactCss = () => {
  const h1Style = {
    color: "white",
    backgroundColor: "blueviolet",
    boxShadow: "10px 10px 5px black",
  };

  return (
    <div>
      <h1 style={h1Style}>Style me using Inline CSS</h1>

      <h1 style={{ textAlign: "center", backgroundColor: "yellow" }}>
        Hello World
      </h1>

      <button className="primary_btn">
        style me using global css
      </button>
    </div>
  );
};

export default ReactCss;
