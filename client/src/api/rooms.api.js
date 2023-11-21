import axios from 'axios';

export const CrearRoomRequest = async(room)=>await axios.post('http://localhost:5000/api/rooms', room)

export const GetRoomsRequest = async()=>await axios.get('http://localhost:5000/api/rooms')

export const DeleteRoomRequest = async(id)=>await axios.delete(`http://localhost:5000/api/rooms/${id}`)

export const GetRoomRequest = async(id)=>await axios.get(`http://localhost:5000/api/rooms/${id}`)

export const UpdateRoomRequest = async(id, nuevo)=>await axios.patch(`http://localhost:5000/api/rooms/${id}`, nuevo)