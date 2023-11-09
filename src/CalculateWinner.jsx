import React, { useState } from "react";

const CalculateWinner = (props) => {
  const [result, setResult] = useState("Who will win?");
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    console.log(lines[i]);
    const [a, b, c] = lines[i];
    if (
      props.squares[a] &&
      props.squares[a] === props.squares[b] &&
      props.squares[a] === props.squares[c]
    ) {
      console.log(
        props.squares[a],
        props.squares[b],
        props.squares[c],
        "--------"
      );
      setResult(`${props.squares[a]} won!`);
    }
  }
  console.log("calculate winner");
  return <span>{result}</span>;
};
export default CalculateWinner;
