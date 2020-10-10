import React, { useState } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls, Loader } from "drei"
import calculateWinner from "./calculateWinner"

import Lighting from './Lighting'
import Game from './Game'
import PostProcessing from './PostProcessing'
import Info from './Info'
import Grid from './Grid'
import Environment from './Environment'


const App = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = i => {
        const boardCopy = [...board]
        if ( winner || boardCopy[i] ) return
        boardCopy[i] = xIsNext ? 'Gem' : "Pearl"
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const renderMoves = () => {
        setBoard(Array(9).fill(null))
    }

    return(
        <React.Fragment>
            <Canvas camera={{ fov: 50, position: [4.19303804240389, -1.4338184309228788, -12.861740834904932]}}>
                <OrbitControls />
                <Lighting />
                <Environment />
                <Grid />
                <Game board={board} xIsNext={xIsNext} winner={winner} handleClick={handleClick}/>
                <PostProcessing />
            </Canvas>
            <Loader 
                containerStyles={{background: "white"}}
                innerStyles={{background: "rgba(244, 199, 238, 0.76)", height: 45, width: 300}}
                barStyles={{background: "white", height: 45}}
                dataStyles={{marginTop: "0.5em", color: "white", fontSize: "1em", fontFamily: "sans-serif", textTransform: "uppercase", fontWeight: 900}}
                dataInterpolation={p => `Loading...`}
            />
            <Info board={board} xIsNext={xIsNext} winner={winner} renderMoves={renderMoves}/>
        </React.Fragment>
    )
}

export default App