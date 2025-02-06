
import { useState } from "react";

function DiceRoller() {
  const [numDice, setNumDice] = useState(1); // setting Default 1 dice as atleast 1 dice is reqd.
  const [diceResults, setDiceResults] = useState([]);

  function rollDice() {
    const results = [];
    for (let i = 0; i < numDice; i++) {
      results.push(Math.floor(Math.random() * 6) + 1); // Random numbers 1-6
    }
    setDiceResults(results);
  }

  return (
    <div>
      <h1>Dice Roller 🎲</h1>
      <p>by Hoshang </p>
      <hr />

      <input
        type="number"
        min={1}
        max={12}
        value={numDice}
        onChange={(e) => setNumDice(e.target.value)}
      />
      <button onClick={rollDice}>ROLL</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          padding: "10px",
          gap: "10px",
        }}
      >
        {diceResults.map((num, index) => (
          <div
            key={index}
            style={{ padding: "10px", border: "1px solid black" }}
          >
            {" "}
            🎲 {num}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiceRoller;
