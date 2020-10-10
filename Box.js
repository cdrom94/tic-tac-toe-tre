import React from 'react'
import { DoubleSide } from "three"
import Gem from './Gem'
import Pearl from './Pearl'

const Box = ({ shape, position, onClick }) => {
  let geo
  shape === "Gem" ? geo = <Gem position={position} />
  : shape === "Pearl" ? geo = <Pearl position={position} />
  : null

  return (
    <React.Fragment>
    {geo}
    <mesh position={position} onClick={onClick}>
      <boxBufferGeometry attach="geometry" args={[2.4, 2.4, 2.4 ]} />
      <meshLambertMaterial 
        attach="material" 
        transparent 
        opacity={0} 
        color={"pink"} 
        alphaTest={0} 
        depthWrite={false} 
        side={DoubleSide} />
    </mesh>
    </React.Fragment>
  )
}

export default React.memo(Box)