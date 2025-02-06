import { useEffect, useState,useRef } from "react";

function App2() {
  const [light, setLight] = useState("red");
  const [isRunning, setIsRunning] = useState(false);
  const timeoutRef = useRef(null)

  function handleRunning() {
    setIsRunning(true);
  }

  useEffect(() => {
    if (isRunning) {
      let time;
      if (light === "red") {
        time = 3000;
        console.log("red: 3 sec");
      }
      if (light === "green") {
        time = 2000;
        console.log("green: 2 sec");
      }
      if (light === "yellow") {
        time = 5000;
        console.log("yellow : 5 sec");
      }

      // agar timeout bacha hua toh usko pehle clear krenge 
      if(timeoutRef.current){   
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(()=> {
        setLight((prevLight) => {
           return prevLight === 'red'? 'green' : prevLight === 'green' ? 'yellow' : 'red'
        })
      } , time )

      return () => clearTimeout(timeoutRef.current);
    }
  }, [isRunning, light]);

  return (
    
    <div>
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
        }>
      <button onClick={handleRunning}> click </button>
    </div>
    </div>
  );
}

export default App2;