import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Square from "./Square";
import CalculateWinner from "./CalculateWinner";

// function CalculateWinner(arr) {
//   let lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     console.log(lines[i]);
//     const [a, b, c] = lines[i];
//     if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
//       return `${arr[a]} won!`;
//     }
//   }
//   return `Who will won?`;
// }

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  };
  return (
    <div className="App">
      {/* <span>{CalculateWinner(squares)}</span> */}
      <CalculateWinner squares={squares}></CalculateWinner>
      <button onClick={handleClick}>Reset</button>
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={value}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
