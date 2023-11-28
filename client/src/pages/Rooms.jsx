import React from 'react'
import { GetRoomsRequest } from '../api/rooms.api'
import { useEffect, useState } from 'react'
import RoomCard from '../components/RoomCard.jsx'
import { useRooms } from '../context/RoomProvider.jsx'
import Navbar from '../components/Navbar'

const Rooms = () => {
  const {rooms, setRooms, obtRooms} = useRooms()
  useEffect(()=>{
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