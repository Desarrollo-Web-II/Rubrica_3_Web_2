import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header>
      <div className='navbar navbar-dark bg-dark'>
          
          <div className='d-flex options-navbar'>
            <Link className='btn btn-dark' to="/login">Iniciar sesion</Link> 
            <Link className='btn btn-dark' to='/'>Inicio</Link>
            <Link className='btn btn-dark' to='/nuevo'>Crear Habitacion</Link>
            <Link className='btn btn-dark' to='/bookings'>Lista de Reservas</Link>
            <Link className='btn btn-dark' to='/newbooking'>Crear Reserva</Link>
          </div>

          <div className='user'>
            <span className='username'></span>
            <button className='btn btn-outline-light'>Cerrar sesiòn</button>
          </div>
      </div>
    </header>
    </>
  )
}

export default Navbar