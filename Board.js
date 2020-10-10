import React from 'react'
import Box from './Box'

const positions = [
    [-1.2, 2.4, 0],
    [1.2, 2.4, 0],
    [3.6, 2.4, 0],
    [-1.2, 0, 0],
    [1.2, 0, 0],
    [3.6, 0, 0],
    [-1.2, -2.4, 0],
    [1.2, -2.4, 0],
    [3.6, -2.4, 0]
]

const Board = ({squares, onClick}) => {
  return( 
        <React.Fragment>
            {positions.map((box, i) => (
                <Box key={i} shape={squares[i]} 
                position={box} 
                onClick={() => onClick(i)} 
                />
            ))}
        </React.Fragment>
    )
}

export default Board
