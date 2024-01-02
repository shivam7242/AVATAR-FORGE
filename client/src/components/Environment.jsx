import React from "react";
import { AvatarCreator } from "@readyplayerme/react-avatar-creator";
import { Canvas } from "@react-three/fiber";
import Avatar from "./components/Avatar";
import { OrbitControls } from "@react-three/drei";
import { ContactShadows, Environment } from "@react-three/drei";
import AvatarScene from "./components/avatarScene";

const Environment = () => {
  const [avatarMode, setAvatarMode] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState("");
  return (
    <div>
      <AvatarCreator
        subdomain="alphadroidhackathon"
        style={{ width: "100vw", height: "100vh" }}
        onAvatarExported={(event) => {
          setAvatarUrl(event.data.url);
          setAvatarMode(false);
        }}
      />
    </div>
  );
};

export default Environment;
