import React, { useContext, useState } from "react";
import { MessageBox } from "./MessageBox";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RenderTexture, Text } from "@react-three/drei";
// import { Daccord } from './Daccord';
import Message from "../smallComponents/Message";
import "../css/Chat.css";
import { data } from "../data/question";
import { ChatContext } from "../context/ChatContext";

var messages = [
  {
    bot: true,
    text: `1)What is your name?
            2) What is your age?
            3) Who are you?`,
  },
  {
    bot: false,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    bot: true,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    bot: false,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    bot: true,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    bot: false,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    bot: true,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    bot: false,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];



const Chats = () => {
  const [onBoarding, setOnBoarding] = useState(true);
  const [topic, setTopic] = useState('');
  const {chats,addChat,removeChat} = useContext(ChatContext);
  const [subtopic, setSubTopic] = useState('');


  return (
    <>
      <div className="chat-body">
        
        <div style={{display:'flex',alignItems:'center' , justifyContent:'space-between', width:'100%'}}>
          <div style={{flex:1}}>
            <button onClick={()=>{setOnBoarding(true); removeChat()}} 
              style={{color:'#FFFFFF', backgroundColor:'white'}}>
              <img style={{height:'20px',width:'20px'}}src={"../../public/backarrow.png"}/>
            </button>
          </div>
          <text className="heading">Chat with your Avatar</text>
        </div>
        {chats?.map((message) => (
          <Message message={message} />
        ))}
        {onBoarding ? (
          <div className="preset-question-container">
            {data.map((question) => {
              return (
                <div className="preset-question-body" style={{cursor:'pointer'}} 
                onClick={()=> {setOnBoarding(false);
                setTopic(question.name)
                addChat({bot:true,question:question.name})
                }}>
                  <text className="question-heading">{question.name}</text>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="chat-container">
            {data.map((temp) => (temp.name === topic && temp.questions.map((message) => (
              <Message message={{...message, bot:true}} 
              onClick={()=>{setSubTopic(message.question); addChat({bot:true,question:message.question})}}
              />
            ))))}
            
          </div>
        )}
        <div className="query">
          <input placeholder="Enter text here" className="input-text" />
          <button className="search-query">Go</button>
        </div>
      </div>
    </>
  );
};

export default Chats;
