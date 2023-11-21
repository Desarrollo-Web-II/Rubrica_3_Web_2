import { useContext, useState } from "react";
import { GetRoomsRequest, DeleteRoomRequest, CrearRoomRequest, GetRoomRequest, UpdateRoomRequest } from "../api/rooms.api";
import { RoomContext } from "./RoomContext";

export const useRooms = () =>{
    const contexto = useContext(RoomContext)
    if (!contexto) {
        throw new Error('useRoom debe ser usado dentro del provider')
    }
    return contexto
}

export const RoomContextProvider=({children})=>{
    const [rooms, setRooms] = useState([])
    //Obtener Habitaciones
    const obtRooms = async()=>{
        try {
          const response  = await GetRoomsRequest()
          console.log(response.data)
          setRooms(response.data)
        } catch (error) {
          console.log(error)
        }
      }
      //Eliminar Habitacion
    const deleteRoom = async(id)=>{
        try {
            const response = await DeleteRoomRequest(id)
            setRooms(rooms.filter(room=> room.id !== id))
        } catch (error) {
            console.log(error)
        }
    }
    //Crear Habitaciones
    const createRooms = async(values)=>{
        try {
            const response = await CrearRoomRequest(values)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    //Consultar una Habitacion
    const obtRoom = async(id)=>{
        try {
            const response = await GetRoomRequest(id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    //Actalizar Habitacion
    const updateRoom = async(id,nuevo)=>{
        try {
            const response = await UpdateRoomRequest(id, nuevo)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <RoomContext.Provider value={{rooms, setRooms, obtRooms, deleteRoom, createRooms, obtRoom, updateRoom}}>
            {children}
        </RoomContext.Provider>
    )
}