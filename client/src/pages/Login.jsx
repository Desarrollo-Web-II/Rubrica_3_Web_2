import React from 'react'

const Login = () => {
  return (
    <div className='container text-center col-6 mt-5'>
        <form action="">
            <div className="mb-3">
                <label className='form-label'>Correo electronico</label>
                <input type="email" className='form-control' required/>
            </div>
            <div className="mb-3">
                <label className='form-label'>Contraseña</label>
                <input type="text" className='form-control' required/>
            </div>
            <button className='btn btn-outline-primary' type='submit'>Iniciar sesion</button>
        </form>
    </div>
  )
}

export default Login