import { useContext, useState } from "react";
import { GetBookingsRequest, CrearBookingRequest, DeleteBookingRequest, UpdateBookingRequest, GetBookingRequest } from "../api/bookings.api";
import { BookingContext } from "./BookingContext";

export const useBookings = () =>{
    const contexto = useContext(BookingContext)
    if (!contexto) {
        throw new Error('useBookings debe ser usado dentro del provider')
    }
    return contexto
}

export const BookingContextProvider=({children})=>{
    const [bookings, setBookings] = useState([])
    //Obtener Reservas
    const obtBookings = async()=>{
        try {
          const response  = await GetBookingsRequest()
          console.log(response.data)
          setBookings(response.data)
        } catch (error) {
          console.log(error)
        }
      }
      //Eliminar Reserva
    const deleteBooking = async(codigo)=>{
        try {
            const response = await DeleteBookingRequest(codigo)
            setBookings(bookings.filter(booking=> booking.codigo !== codigo))
        } catch (error) {
            console.log(error)
        }
    }
    //Crear Reservas
    const createBookings = async(values)=>{
        try {
            const response = await CrearBookingRequest(values)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    //Consultar una Reserva
    const obtBooking = async(codigo)=>{
        try {
            const response = await GetBookingRequest(codigo)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    //Actalizar Reserva
    const updateBooking = async(id,nuevo)=>{
        try {
            const response = await UpdateBookingRequest(id, nuevo)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <BookingContext.Provider value={{bookings, setBookings, obtBookings, deleteBooking, createBookings, obtBooking, updateBooking}}>
            {children}
        </BookingContext.Provider>
    )
}