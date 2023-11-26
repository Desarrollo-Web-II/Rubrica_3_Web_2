import React from 'react'
import { useBookings } from '../context/BookingProvider'
import { useNavigate } from 'react-router-dom'

const BookingCard = ({booking}) => {
    const {deleteBooking} = useBookings()
    const navigate = useNavigate()
  return (
    <div className='card'>
        <div className="card-header">Codigo de Reserva: {booking.codigo}</div>
        <div className="card-body">
            <h4>Codigo de Habitacion: {booking.codigo_habitacion}</h4>
            <h4>Nombre de cliente: {booking.nombre_cliente}</h4>
            <h4>Telefono de cliente: {booking.telefono_cliente}</h4>
            <h4>Fecha de reserva: {booking.fecha_reservacion}</h4>
            <h4>Fecha de entrada: {booking.fecha_entrada}</h4>
            <h4>Fecha de salida: {booking.fecha_salida}</h4>
            <button className='btn btn-outline-danger' onClick={()=>deleteBooking(booking.codigo)}>Eliminar</button>
            <button className='btn btn-outline-success' onClick={()=>navigate(`/bookform/${booking.codigo}`)}>Editar</button>
        </div>
    </div>
  )
}

export default BookingCard