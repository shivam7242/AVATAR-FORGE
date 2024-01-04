import { createContext, useEffect, useState } from "react";

export const SpeakContext = createContext();

export const SpeakContextProvider = ({children}) =>{
    const [toSpeak,settoSpeak] = useState(localStorage.getItem("tospeak") || null);

    const nextToSpeak = (text) =>{
        settoSpeak(text);
    }

    useEffect(() => {
        localStorage.setItem("tospeak" , toSpeak)
    },[toSpeak]);

    return (
        <SpeakContext.Provider value={{toSpeak,nextToSpeak}}>
            {children}
        </SpeakContext.Provider>
    )
}
