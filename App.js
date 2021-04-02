import React, { useState, Suspense, useRef, useCallback } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei/OrbitControls";
import { Loader } from "@react-three/drei/Loader";
import calculateWinner from "./calculateWinner";
// import {Environment} from '@react-three/drei/Environment'
// import imageUrl from './media/parkimage.hdr'

import Environment from "./components/Environment";
import Flare from "./components/Flare";
import Game from "./components/Game";
import Grid from "./components/Grid";
import Info from "./components/Info";
import Lighting from "./components/Lighting";
import Particles from "./components/Particles";
import PostProcessing from "./components/PostProcessing";

const App = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = i => {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = xIsNext ? "Gem" : "Pearl";
		setBoard(boardCopy);
		setXIsNext(!xIsNext);
	};

	const renderMoves = () => {
		setBoard(Array(9).fill(null));
	};

	return (
		<React.Fragment>
			<Suspense fallback={null}>
				<Loader
					containerStyles={{ background: "white" }}
					innerStyles={{
						background: "rgba(244, 199, 238, 0.76)",
						height: 45,
						width: 300,
					}}
					barStyles={{ background: "white", height: 45 }}
					dataStyles={{
						color: "rgba(244, 199, 238, 0.76)",
						fontSize: "1em",
						fontFamily: "sans-serif",
						textTransform: "uppercase",
						fontWeight: 900,
						float: "right",
					}}
					dataInterpolation={() => `Loading`}
				/>
				<Canvas
					camera={{
						fov: 50,
						position: [
							-8.19303804240389,
							-1.4338184309228788,
							-12.861740834904932,
						],
					}}
					shadowMap
				>
					<OrbitControls maxDistance={60} enableDamping />
					<Lighting />
					<Grid />
					<Game
						board={board}
						xIsNext={xIsNext}
						winner={winner}
						handleClick={handleClick}
					/>
					<Particles count={300} color="pink" />
					<Suspense fallback={null}>
						<Flare />
					</Suspense>
					<PostProcessing />
					<Environment />
				</Canvas>
				<Info
					board={board}
					xIsNext={xIsNext}
					winner={winner}
					renderMoves={renderMoves}
				/>
			</Suspense>
		</React.Fragment>
	);
};

export default App;
