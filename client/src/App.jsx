import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Test from './components/Test'
import { AvatarCreator} from '@readyplayerme/react-avatar-creator';
import { Canvas } from '@react-three/fiber';
import Avatar from './components/Avatar';
import { OrbitControls } from "@react-three/drei";
import { ContactShadows, Environment } from '@react-three/drei';
import AvatarScene from './components/avatarScene';
import Chats from './components/Chats';


function App() {
  const [count, setCount] = useState(0)
  const [avatarMode, setAvatarMode] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState('');
  return (
  <>
    {avatarMode ? (
      <AvatarCreator 
        subdomain='alphadroidhackathon' 
        style={{width:'100vw' , height:'100vh'}}
        onAvatarExported={(event) =>  {setAvatarUrl(event.data.url); setAvatarMode(false); }}
      />
      // <div></div>
    ) : 
    <div style={{ height: "100vh", width: "100vw", display:'flex', flexDirection:'row'}}>
       <div style={{flex:2}}> 
      <Chats />
    </div>
    <Canvas shadows camera={{ position: [0,0,12], fov: 30 }} style={{flex:2}}>
        {/* <color attach="background" args={["#ececec"]} /> */}
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={2} />  
        <AvatarScene avatarUrl = {avatarUrl}/>
    </Canvas>
   
    </div>
    }
  </>
  )
}

export default App
