import React from "react";
import Board from "./Board";

const Game = ({ board, handleClick }) => {
	return <Board squares={board} onClick={handleClick} />;
};

export default Game;
