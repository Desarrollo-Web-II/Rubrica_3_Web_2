import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Logo</h1>
        <div className="options-navbar">
            <Link to='/'>Inicio</Link>
            <Link to='/nuevo'>Crear Habitacion</Link>
        </div>
    </div>
  )
}

export default Navbar