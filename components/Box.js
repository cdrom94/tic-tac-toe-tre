import React from 'react'
import { DoubleSide } from "three"
import Gem from './Gem'
import Pearl from './Pearl'

const Box = ({ shape, position, onClick }) => {
  let geo = null
  shape === "Gem" ? geo = <Gem position={position} />
  : shape === "Pearl" ? geo = <Pearl position={position} />
  : null

  return (
    <React.Fragment>
    {geo}
    <mesh position={position} onClick={onClick}>
      <boxBufferGeometry args={[2.4, 2.4, 2.4 ]} />
      <meshLambertMaterial 
        transparent 
        opacity={0} 
        color="pink" 
        alphaTest={0} 
        depthWrite={false} 
        side={DoubleSide} />
    </mesh>
    </React.Fragment>
  )
}

export default React.memo(Box)