import React from 'react'
import { Link } from 'react-router-dom'
import { useUsers } from '../context/UserProvider.jsx'

const Navbar = () => {
  const {tipo, init, cerr, cambiarSesion} = useUsers()
  return (
    <>
    <header>
      <div className='navbar navbar-dark bg-dark'>
          
          
            {
              tipo =='admin' ? (
                <div className='d-flex options-navbar'>
                  <Link className='btn btn-dark' to='/home'>Inicio</Link>
                  <Link className='btn btn-dark' to='/rooms'>Lista de Habitaciones</Link>
                  <Link className='btn btn-dark' to='/nuevo'>Crear Habitacion</Link>
                </div>
              ):(
                <></>
              )
            }
            {
              tipo =='user' ? (
                <div className='d-flex options-navbar'>
                  <Link className='btn btn-dark' to='/home'>Inicio</Link>
                  <Link className='btn btn-dark' to='/bookings'>Lista de Reservas</Link>
                  <Link className='btn btn-dark' to='/newbooking'>Crear Reserva</Link>
                </div>
              ):(
                <></>
              )
            }                     

          <div className='user'>
            <span className='username'></span>
          
              
              <button className='btn btn-outline-light'>Cerrar sesiòn</button>
              
              <Link className='btn btn-dark' to="/login">Iniciar sesion</Link> 
            
            
          </div>
      </div>
    </header>
    </>
  )
}

export default Navbar