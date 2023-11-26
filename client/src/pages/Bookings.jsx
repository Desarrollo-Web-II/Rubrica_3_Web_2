import React from 'react'
import { useEffect } from 'react'
import BookingCard from '../components/BookingCard.jsx'
import { useBookings } from '../context/BookingProvider.jsx'

const Bookings = () => {
  const {bookings, setBookings, obtBookings} = useBookings()
  useEffect(()=>{
    obtBookings()
  },[])
  return (
    <div>
      <h1>Reservas</h1>
      <ul>
        {
          bookings.map(booking=>(
            <BookingCard booking={booking} key={booking.codigo}></BookingCard>
          ))
        }
      </ul>
    </div>
  )
}

export default Bookings