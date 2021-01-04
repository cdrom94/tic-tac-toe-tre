import React, { useRef } from 'react'
import { DoubleSide } from "three"
import { useFrame } from 'react-three-fiber'

const Gem = ({ position }) => {
  const mesh1 = useRef()
  
  useFrame(() => {
    if (mesh1.current) mesh1.current.rotation.x = mesh1.current.rotation.y += 0.01
  })

  return (
    <React.Fragment>
       <mesh position={position} ref={mesh1}>
        <dodecahedronBufferGeometry args={[0.5]}/>
        <meshPhysicalMaterial 
          map={null}
          color="lightpink"
          metalness={1}
          roughness={0}
          side={DoubleSide}
          transparent
          alphaTest={0.5}
          envMapIntensity={20}
          transmission={0.4}
          premultipliedAlpha
          reflectivity={1}
          needsUpdate />
      </mesh>
  </React.Fragment>
  )
}

export default React.memo(Gem)


