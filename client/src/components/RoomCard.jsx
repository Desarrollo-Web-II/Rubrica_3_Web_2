import React from 'react'
import { DeleteRoomRequest } from '../api/rooms.api'
import { useRooms } from '../context/RoomProvider'
import { useNavigate } from 'react-router-dom'

const RoomCard = ({room}) => {
    const {deleteRoom} = useRooms()
    const navigate = useNavigate()
  return (
    <div className='room-card'>
        <div className="room-card-header">Numero de Habitacion: {room.numero}</div>
        <div className="room-card-body">
            <h4>Tipo de Habitacion: {room.tipo}</h4>
            <h5>Valor: {room.valor}</h5>
            <button className='btn-room-card' onClick={()=>deleteRoom(room.id)}>Eliminar</button>
            <button className='btn-room-card' onClick={()=>navigate(`/editar/${room.id}`)}>Editar</button>
        </div>
    </div>
  )
}

export default RoomCard