import { useState } from "react";

function App() {
  const [bars, setBars] = useState([]);

  function handleSetBar() {
    const newBar = { id: Date.now(), progress: 0 };

    setBars((prevBars) => [...prevBars, newBar]);

    const interval = setInterval(() => {
      setBars((prevBars) => 
        prevBars.map((bar) =>
          bar.id === newBar.id
            ? { ...bar, progress: Math.min(bar.progress + 20, 100) }
            : bar
        
      ))
    }, 400);
    setTimeout(() => clearInterval(interval), 2000); //
  }

  return (
    <div>
      <button onClick={handleSetBar}> click for a new Progress bar</button>
      {/* bars array ko map krke hi andar ki bars ka progress ban sakta hai  */}
      <br />
      {bars.map((bar) => 
        <progress key={bar.id} value={bar.progress} max={100} /> 
      )}
    </div>
  );
}

export default App;
