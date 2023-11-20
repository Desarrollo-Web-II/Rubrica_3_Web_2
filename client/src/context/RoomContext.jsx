import { createContext } from "react";

export const RoomContext = createContext()

export const RoomContextProvider=({children})=>{
    return(
        <RoomContextProvider value={{text: "hola"}}>
            {children}
        </RoomContextProvider>
    )
}