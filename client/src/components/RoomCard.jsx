import React from 'react'
import { DeleteRoomRequest } from '../api/rooms.api'

const RoomCard = ({room}) => {
    const handleDelete = async(id)=>{
        try {
            const response = await DeleteRoomRequest(id)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='room-card'>
        <div className="room-card-header">Numero de Habitacion: {room.numero}</div>
        <div className="room-card-body">
            <h4>Tipo de Habitacion: {room.tipo}</h4>
            <h5>Valor: {room.valor}</h5>
            <button className='btn-room-card' onClick={()=>handleDelete(room.id)}>Eliminar</button>
            <button className='btn-room-card' onClick={()=>console.log(room)}>Editar</button>
        </div>
    </div>
  )
}

export default RoomCard