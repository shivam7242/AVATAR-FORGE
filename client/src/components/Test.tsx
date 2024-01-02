// import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from '@readyplayerme/react-avatar-creator';
// import { Avatar } from "@readyplayerme/visage";
// import { useState } from "react";

// const config: AvatarCreatorConfig = {
//   clearCache: true,
//   bodyType: 'fullbody',
//   quickStart: false,
//   language: 'en',
// };

// const style = { width: '100vw', height: '100vh', border: 'none' };

// export default function Test() {
//   const [avatarUrl, setAvatarUrl] = useState('');
//   const handleOnAvatarExported = (event: AvatarExportedEvent) => {
//     setAvatarUrl(event.data.url);
//   };

//   return (
//       <>
//         <AvatarCreator subdomain="alphadroidhackathon" config={config} style={style} onAvatarExported={handleOnAvatarExported} />
//         {avatarUrl && <Avatar modelSrc={avatarUrl} />}
//       </>
//   );
// }