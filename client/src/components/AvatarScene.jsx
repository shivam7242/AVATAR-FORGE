import React from 'react'
import { OrbitControls } from 'three-stdlib';
import { ContactShadows, Environment } from '@react-three/drei';
import Avatar from './Avatar';

const AvatarScene = ({avatarUrl}) => {
  return (
    <>
      <ambientLight intensity={3} />
      {/* <ContactShadows blur={2} /> */}
      {/* <OrbitControls /> */}
      {/* <mesh
        rotation-x={-Math.PI / 2}
        position-y={-0.001}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh> */}
        <Avatar position={[0,-1.7,0]} scale={2} avatarUrl = {avatarUrl}/>

    </>
  )
}

export default AvatarScene
