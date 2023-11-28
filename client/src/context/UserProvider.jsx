import { useContext, useState } from "react";
import { LoginRequest } from "../api/users.api";
import { UserContext } from "./UserContext";
import { useCookies } from 'react-cookie';

export const useUsers = () =>{
    const contexto = useContext(UserContext)
    if (!contexto) {
        throw new Error('useUsers debe ser usado dentro del provider')
    }
    return contexto
}

export const UserContextProvider = ({children})=>{
    const [cookies, setCookie] = useCookies(['token']);
    const [tipo, setTipo] = useState('')
    const [init, setInit] = useState(false)
    const [cerr, setCerr] = useState(true)
    const iniciarSesion = async(values)=>{
        try {
            const response = await LoginRequest(values)
            console.log(response)
            //response.cookie('prueba',response.data.token, {httpOnly: true, maxAge: 300000, secure: false})
            setCookie('token', response.data.data.token, { path: '/' });
            setTipo(response.data.data.type)
            setInit(true)
            setCerr(false)
        } catch (error) {
            console.log(error)
        }
    }
    const cambiarSesion = () =>{
        setCerr(!cerr)
        setInit(!init)
    }
    /*const obtCookie = async () =>{
        try {
            const response = await GetCookieRequest()
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }*/
    return(
        <UserContext.Provider value={{iniciarSesion, tipo, init, cerr, cambiarSesion, setTipo}}>
            {children}
        </UserContext.Provider>
    )
}