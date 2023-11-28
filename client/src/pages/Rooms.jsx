import React from 'react'
import { GetRoomsRequest } from '../api/rooms.api'
import { useEffect, useState } from 'react'
import RoomCard from '../components/RoomCard.jsx'
import { useRooms } from '../context/RoomProvider.jsx'
import { useUsers } from '../context/UserProvider.jsx'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Rooms = () => {
  const {rooms, setRooms, obtRooms} = useRooms()
  const {tipo} = useUsers()
  const navigate = useNavigate()
  useEffect(()=>{
    if (tipo == 'admin') {
            
    }else{
        navigate('/')
    }
    obtRooms()
  },[])
  return (
    <><Navbar /><div>
      <h1>Habitaciones</h1>
      <ul>
        {rooms.map(room => (
          <RoomCard room={room} key={room.id}></RoomCard>
        ))}
      </ul>
    </div></>
  )
}

export default Rooms