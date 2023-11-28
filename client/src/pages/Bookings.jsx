import React from 'react'
import { useEffect } from 'react'
import BookingCard from '../components/BookingCard.jsx'
import { useBookings } from '../context/BookingProvider.jsx'
import Navbar from '../components/Navbar.jsx'
import { useNavigate } from 'react-router-dom'
import { useUsers } from '../context/UserProvider.jsx'

const Bookings = () => {
  const {bookings, setBookings, obtBookings} = useBookings()
  const {tipo} = useUsers()
  const navigate = useNavigate()
  useEffect(()=>{
    if (tipo == 'user') {
            
    }else{
        navigate('/home')
    }
    obtBookings()
  },[])
  return (
    <><Navbar /><div>
      <h1>Lista de Reservas</h1>
      <ul>
        {bookings.map(booking => (
          <BookingCard booking={booking} key={booking.codigo}></BookingCard>
        ))}
      </ul>
    </div></>
  )
}

export default Bookings