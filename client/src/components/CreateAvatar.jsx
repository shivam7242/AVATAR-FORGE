import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AvatarCreator} from '@readyplayerme/react-avatar-creator';
const CreateAvatar = () => {
    const [avatarMode, setAvatarMode] = useState(true);
    const [avatarUrl, setAvatarUrl] = useState('');
    const navigate = useNavigate();
//   useEffect(() => {
//     if(!avatarMode && avatarUrl===''){

//     }
//   } ,[avatarUrl])
  return (
    <div>
      <AvatarCreator 
        subdomain='alphadroidhackathon' 
        style={{width:'100vw' , height:'100vh'}}
        onAvatarExported={(event) =>  {
            setAvatarUrl(event.data.url); 
            setAvatarMode(false); 
            navigate('/home', {state : {avatarMode:false, avatarUrl:event.data.url}});
        }}
      />
    </div>
  )
}

export default CreateAvatar
