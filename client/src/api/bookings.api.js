import axios from 'axios';

export const CrearBookingRequest = async(booking)=>await axios.post('http://localhost:5000/api/bookings', booking)

export const GetBookingsRequest = async()=>await axios.get('http://localhost:5000/api/bookings')

export const DeleteBookingRequest = async(id)=>await axios.delete(`http://localhost:5000/api/bookings/${id}`)

export const GetBookingRequest = async(id)=>await axios.get(`http://localhost:5000/api/bookings/${id}`)

export const UpdateBookingRequest = async(id, nuevo)=>await axios.patch(`http://localhost:5000/api/bookings/${id}`, nuevo)