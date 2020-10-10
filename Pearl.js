import React, { useRef } from 'react'

const Pearl = ({ position }) => {
  const mesh = useRef()
  
  return (
    <mesh position={position} ref={mesh} castShadow receiveShadow>
      <sphereBufferGeometry attach="geometry" args={[0.45, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        metalness={0.9}
        roughness={0.1} />
    </mesh>
  )
}

export default React.memo(Pearl)