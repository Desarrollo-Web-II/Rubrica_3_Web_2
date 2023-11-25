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
          </div>

          <div className='user'>
            <span className='username'></span>
            <button className='btn-logout'>Cerrar sesiòn</button>
          </div>
      </div>
    </header>
    </>
  )
}

export default Navbar