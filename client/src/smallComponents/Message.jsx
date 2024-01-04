import React from "react";
import "../css/Message.css";
import { useState } from "react";
import Reservation from "../Reservation";

const Message = ({ message }) => {
  const [showprice,setShowPrice] = useState(false)
  return (
    <div  className="message-container" >
      <div onClick={()=>{setShowPrice(true)}} className={message.bot ? "botMessage" : "userMessage"}>
        {/* <text className="sender-id">{message.bot ? "Bot" : "User"}</text> */}
        <div className={message.bot ? "botMessageBox" : "userMessageBox"}>
          <text fontSize={10} style={{ color: "#FFFFFF" }}>
            {message.question}
          </text>
        </div>
        {
        showprice ? <Reservation/> : ""
      }
      </div>

    </div>
  );
};

export default Message;
