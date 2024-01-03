import React, { useState } from "react";
import { MessageBox } from "./MessageBox";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RenderTexture, Text } from "@react-three/drei";
// import { Daccord } from './Daccord';
import Message from "../smallComponents/Message";
import "../css/Chat.css";
import { data } from "../data/question";

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
  return (
    <>
      <div className="chat-body">
        <text className="heading">Chat with your Avatar</text>
        {onBoarding ? (
          <div className="preset-question-container">
            {data.map((question) => {
              return (
                <div className="preset-question-body" style={{cursor:'pointer'}} onClick={()=>setOnBoarding(false)}>
                  <text className="question-heading">{question.name}</text>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="chat-container">
            {messages.map((message) => (
              <Message message={message} />
            ))}
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
