import { useEffect, useState } from "react";

function App() {
  const [light, setLight] = useState("red");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setLight((prevLight) => {
          if (prevLight === "red") return "green";
          if (prevLight === "green") return "yellow";
          return "red";
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [running]);

  function handleLightChange() {
    setRunning(true);
  }

  return (
    <>
      <div
        style={
          light === "red"
            ? { backgroundColor: "red", border: "black", width : "100px", height : "100px", margin: "10px" }
            : { backgroundColor: "grey", border: "1px solid black" , width : "100px", height : "100px", margin: "10px"}
        }
      ></div>
      <div
        style={
          light === "green"
            ? { backgroundColor: "green", border: "black" , width : "100px", height : "100px", margin: "10px"}
            : { backgroundColor: "grey", border: "1px solid black", width : "100px", height : "100px", margin: "10px" }
        }
      ></div>
      <div
        style={
          light === "yellow"
            ? { backgroundColor: "yellow", border: "black" , width : "100px", height : "100px", margin: "10px"}
            : { backgroundColor: "grey", border: "1px solid black", width : "100px", height : "100px", margin: "10px" }
        }
      ></div>

      <button onClick={handleLightChange}> click to start </button>
    </>
  );
}

export default App;
