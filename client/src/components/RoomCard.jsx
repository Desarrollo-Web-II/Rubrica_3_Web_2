import React from 'react'
import { useRooms } from '../context/RoomProvider'
import { useNavigate } from 'react-router-dom'

const RoomCard = ({room}) => {
    const {deleteRoom} = useRooms()
    const navigate = useNavigate()
  return (
    <div className='card text-center col-6'>
        <div className="card-header">Numero de Habitacion: {room.numero}</div>
        <div className="card-body">
            <h4>Tipo de Habitacion: {room.tipo}</h4>
            <h5>Valor: {room.valor}</h5>
            <button className='btn btn-outline-danger me-3' onClick={()=>deleteRoom(room.id)}>Eliminar</button>
            <button className='btn btn-outline-success' onClick={()=>navigate(`/editar/${room.id}`)}>Editar</button>
        </div>
    </div>
  )
}

export default RoomCard