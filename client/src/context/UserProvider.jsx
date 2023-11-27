import { useContext, useState } from "react";
import { LoginRequest } from "../api/users.api";
import { UserContext } from "./UserContext";

export const useUsers = () =>{
    const contexto = useContext(UserContext)
    if (!contexto) {
        throw new Error('useUsers debe ser usado dentro del provider')
    }
    return contexto
}

export const UserContextProvider = ({children})=>{
    const iniciarSesion = async(values)=>{
        try {
            const response = await LoginRequest(values)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <UserContext.Provider value={{iniciarSesion}}>
            {children}
        </UserContext.Provider>
    )
}