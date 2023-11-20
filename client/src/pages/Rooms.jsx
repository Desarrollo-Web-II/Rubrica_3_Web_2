import React from 'react'
import { GetRoomsRequest } from '../api/rooms.api'
import { useEffect, useState } from 'react'
import RoomCard from '../components/RoomCard.jsx'

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  useEffect(()=>{
    const obtRooms = async()=>{
      try {
        const response  = await GetRoomsRequest()
        console.log(response.data)
        setRooms(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    obtRooms()
  },[])
  return (
    <div>
      <h1>Habitaciones</h1>
      <ul>
        {
          rooms.map(room=>(
            <RoomCard room={room} key={room.id}></RoomCard>
          ))
        }
      </ul>
    </div>
  )
}

export default Rooms