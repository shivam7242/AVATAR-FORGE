import React from "react";
import "../css/Message.css";

const Message = ({ message }) => {
  return (
    <div className="message-container">
      <div className={message.bot ? "botMessage" : "userMessage"}>
        <text className="sender-id">{message.bot ? "Bot" : "User"}</text>
        <div className={message.bot ? "botMessageBox" : "userMessageBox"}>
          <text fontSize={10} style={{ color: "#FFFFFF" }}>
            {message.text}
          </text>
        </div>
      </div>
    </div>
  );
};

export default Message;
