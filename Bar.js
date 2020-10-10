import React from 'react'

const Bar = (props) => {
  return (
    <mesh {...props}>
      <boxBufferGeometry attach="geometry" args={[0.05, 7, 0.05]} />
      <meshStandardMaterial attach="material" metalness={1} roughness={0.1} color={0xffcc88} />
    </mesh>
  )
}

export default Bar