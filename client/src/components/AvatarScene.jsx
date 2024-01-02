import React from 'react'
import { OrbitControls } from 'three-stdlib';
import { ContactShadows, Environment } from '@react-three/drei';
import Avatar from './Avatar';

const AvatarScene = ({avatarUrl}) => {
  return (
    <>
      <ambientLight intensity={3} />
        <Avatar position={[0,-2,0]} scale={2.5} avatarUrl = {avatarUrl}/>

    </>
  )
}

export default AvatarScene
