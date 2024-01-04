import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChatContextProvider } from './context/ChatContext.jsx'
import { SpeakContextProvider } from './context/SpeakContext.jsx'
import Reservation from './Reservation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatContextProvider>
      <SpeakContextProvider>
        <App />
        {/* <Reservation/> */}
      </SpeakContextProvider>
    </ChatContextProvider>
  </React.StrictMode>,
)
