import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =() =>{
    return (
        <div className='navbar navbar-dark bg-dark'>
            <div className='d-flex'>
                <Link>inicio</Link>
                <Link>Crear Usuarios</Link>
            </div>
        </div>
    )
}

export default Navbar