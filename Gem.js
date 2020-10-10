import React, { useRef } from 'react'
import { DoubleSide } from "three"
import { useFrame } from 'react-three-fiber'

const Gem = ({ position }) => {
  const mesh1 = useRef()
  const mesh2 = useRef()
  
  useFrame(() => { 
    mesh1.current.rotation.x = mesh1.current.rotation.y += 0.01
    mesh2.current.rotation.x = mesh2.current.rotation.y += 0.01
  })

  const color = "lightpink"
  
  return (
    <React.Fragment>
       <mesh position={position} ref={mesh1} castShadow receiveShadow>
        <dodecahedronBufferGeometry attach="geometry" args={[0.5]}/>
        <meshPhysicalMaterial 
          attach="material" 
          map={null}
          color={color}
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
      <mesh position={position} ref={mesh2} castShadow receiveShadow>
        <dodecahedronBufferGeometry attach="geometry" args={[0.5]}/>
        <meshPhysicalMaterial 
          attach="material" 
          map={null}
          color={color}
          roughness={0}
          opacity={0.25}
          side={DoubleSide}
          transparent
          alphaTest={0.5}
          depthWrite={false}
          envMapIntensity={10}
          premultipliedAlpha
          reflectivity={1}
          needsUpdate />
      </mesh>
  </React.Fragment>
  )
}

export default React.memo(Gem)


