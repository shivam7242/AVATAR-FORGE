import React from 'react'
import { MessageBox } from './MessageBox';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RenderTexture, Text } from '@react-three/drei';
// import { Daccord } from './Daccord';
import { Application } from '@splinetool/runtime';
import Spline from '@splinetool/react-spline';
import Message from '../smallComponents/Message';
import '../css/Chat.css'

var messages = [
    {
      bot: true,
      text: `1)What is your name?
            2) What is your age?
            3) Who are you?`
    },
    {
      bot: false,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      bot: true,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      bot: false,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      bot: true,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      bot: false,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      bot: true,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      bot: false,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
]
const Chats = () => {
  return (
    <div className='chat-body'>
      <text className="heading">Test Messages</text>
      <div className="chat-container">
        {messages.map((message) =>  (
      <Message message={message}/>
        ))}
    </div>
    <div className='query'>
        <input className='input-text'/>
        <button className='search-query'>Go</button>
      </div>
    </div>
  )
}

export default Chats
