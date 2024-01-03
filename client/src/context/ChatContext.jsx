import { createContext, useEffect, useState } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({children}) =>{
    const [chats,setChats] = useState(
            localStorage.getItem("chats") || []
    );

    const addChat = (message) =>{
        setChats([...chats,message]);
    };

    const removeChat = () =>{
        setChats(chats.slice(0,-1));
    }

    useEffect(() => {
        localStorage.setItem("chats" , chats)
    },[chats]);

    return (
        <ChatContext.Provider value={{chats, addChat,removeChat}}>
            {children}
        </ChatContext.Provider>
    )
}
