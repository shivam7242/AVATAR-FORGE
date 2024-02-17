import React, { useEffect, useMemo, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import scene from "../assets/test1.glb";
import idleScene from "../animations/M_Standing_Idle_001.glb";
import talkinScene from "../animations/M_Talking_Variations_001.glb";
import welcomeScene from "../animations/expression/M_Standing_Expressions_001.glb";
import * as THREE from "three";
import { useControls } from "leva";
import { useFrame, useLoader } from "@react-three/fiber";
import demoaudio from "../assets/charlievoice.mp3";
import jsonFile from "../assets/charlievoice.json";

const corresponding = {
  A: "viseme_PP",
  B: "viseme_kk",
  C: "viseme_I",
  D: "viseme_AA",
  E: "viseme_O",
  F: "viseme_U",
  G: "viseme_FF",
  H: "viseme_TH",
  X: "viseme_PP",
};





export default function Model(props) {
  const [animation, setAnimation] = useState('Idle');

  const group = useRef();
  const avatar = useRef();

  const  {nodes,scene}  = useGLTF(props.avatarUrl+'?morphTargets=Oculus Visemes');
  const {animations: idleAnimation} = useGLTF(idleScene);
  const { animations: talkingAnimation } = useGLTF(talkinScene);
  const { animations: welcomeAnimation } = useGLTF(welcomeScene);


  // const msg = new SpeechSynthesisUtterance();
  // msg.volume = 1; // 0 to 1
  // msg.rate = 1; // 0.1 to 10
  // msg.pitch = 1.5; // 0 to 2
  // msg.text  = "Look at me, I am talking";


  // const voice = {
  //   "name": "Daniel",
  //   "lang": "en-GB"
  // };
  // // console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
  // msg.voiceURI = voice.name;
  // msg.lang = voice.lang;
  // speechSynthesis.speak(msg);


  const {
    playAudio,
    headFollow,
    smoothMorphTarget,
    morphTargetSmoothing,
  } = useControls({
    playAudio: false,
    headFollow: true,
    smoothMorphTarget: true,
    morphTargetSmoothing: 0.5,
  });

  idleAnimation[0].name = 'Idle';
  talkingAnimation[0].name = 'Talking';
  welcomeAnimation[0].name = 'Welcome';
  const allAnimation = useAnimations([idleAnimation[0], talkingAnimation[0],welcomeAnimation[0]], scene);
  const {actions} = allAnimation;
  useEffect(() => {
    setAnimation("Welcome");
    actions[animation].reset().play();
    return () => actions[animation].fadeOut(0.5);
  }, [animation]);

  const audio = useMemo(() => new Audio(demoaudio), []);
  const lipsync = jsonFile;

  useFrame(() => {
    const currentAudioTime = audio.currentTime;
    if (audio.paused || audio.ended) {
      setAnimation("Welcome");
      return;
    }
    Object.values(corresponding).forEach((value) => {
      if (!smoothMorphTarget) {
        nodes.Wolf3D_Head.morphTargetInfluences[
          nodes.Wolf3D_Head.morphTargetDictionary[value]
        ] = 0;
        nodes.Wolf3D_Teeth.morphTargetInfluences[
          nodes.Wolf3D_Teeth.morphTargetDictionary[value]
        ] = 0;
      } else {
        nodes.Wolf3D_Head.morphTargetInfluences[
          nodes.Wolf3D_Head.morphTargetDictionary[value]
        ] = THREE.MathUtils.lerp(
          nodes.Wolf3D_Head.morphTargetInfluences[
            nodes.Wolf3D_Head.morphTargetDictionary[value]
          ],
          0,
          morphTargetSmoothing
        );

        nodes.Wolf3D_Teeth.morphTargetInfluences[
          nodes.Wolf3D_Teeth.morphTargetDictionary[value]
        ] = THREE.MathUtils.lerp(
          nodes.Wolf3D_Teeth.morphTargetInfluences[
            nodes.Wolf3D_Teeth.morphTargetDictionary[value]
          ],
          0,
          morphTargetSmoothing
        );
      }
    });
    for (let i = 0; i < lipsync.mouthCues.length; i++) {
      const mouthCue = lipsync.mouthCues[i];
      if (
        currentAudioTime >= mouthCue.start &&
        currentAudioTime <= mouthCue.end
      ) {
        if (!smoothMorphTarget) {
          nodes.Wolf3D_Head.morphTargetInfluences[
            nodes.Wolf3D_Head.morphTargetDictionary[
              corresponding[mouthCue.value]
            ]
          ] = 1;
          nodes.Wolf3D_Teeth.morphTargetInfluences[
            nodes.Wolf3D_Teeth.morphTargetDictionary[
              corresponding[mouthCue.value]
            ]
          ] = 1;
        } else {
          nodes.Wolf3D_Head.morphTargetInfluences[
            nodes.Wolf3D_Head.morphTargetDictionary[
              corresponding[mouthCue.value]
            ]
          ] = THREE.MathUtils.lerp(
            nodes.Wolf3D_Head.morphTargetInfluences[
              nodes.Wolf3D_Head.morphTargetDictionary[
                corresponding[mouthCue.value]
              ]
            ],
            1,
            morphTargetSmoothing
          );
          nodes.Wolf3D_Teeth.morphTargetInfluences[
            nodes.Wolf3D_Teeth.morphTargetDictionary[
              corresponding[mouthCue.value]
            ]
          ] = THREE.MathUtils.lerp(
            nodes.Wolf3D_Teeth.morphTargetInfluences[
              nodes.Wolf3D_Teeth.morphTargetDictionary[
                corresponding[mouthCue.value]
              ]
            ],
            1,
            morphTargetSmoothing
          );
        }

        break;
      }
    }
  });

  
  useEffect(() => {
    nodes.Wolf3D_Head.morphTargetInfluences[
      nodes.Wolf3D_Head.morphTargetDictionary["viseme_I"]
    ] = 0;
    nodes.Wolf3D_Teeth.morphTargetInfluences[
      nodes.Wolf3D_Teeth.morphTargetDictionary["viseme_I"]
    ] = 1;
    if (playAudio) {
      audio.play();
      setAnimation('Talking')
    } else {
      
      setAnimation("Idle");
      audio.pause();
      setAnimation("Idle");
    }
  }, [playAudio]);
  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName("LeftEye").lookAt(state.camera.position);
      group.current.getObjectByName("RightEye").lookAt(state.camera.position);
    }
  });


  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={scene} ref={avatar} />
    </group>
  );
}

useGLTF.preload(idleScene);
useGLTF.preload(talkinScene);
useGLTF.preload(welcomeScene);  
