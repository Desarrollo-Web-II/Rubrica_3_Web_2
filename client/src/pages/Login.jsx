import React, { useState } from 'react'
import {Formik, Form} from 'formik'
import { useUsers } from '../context/UserProvider.jsx'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const {iniciarSesion} = useUsers();

  const navigate = useNavigate()
  return (
    <div className='container text-center col-6 mt-5'>
      <Formik
        initialValues={user}
        enableReinitialize={true}
        onSubmit={async(values, actions)=>{
          //console.log(values)
              await iniciarSesion(values)  
              navigate('/home')      
          //actions.resetForm()
          setUser({
            email: "",
            password: ""
          })
      }}
      >
        {({handleChange, handleSubmit, values, isSubmitting})=>(
        <Form onSubmit={handleSubmit}>
          <h2>Iniciar Sesión</h2>
          <div className="mb-3">
              <label className='form-label'>Correo electronico</label>
              <input type="email" className='form-control' name='email' onChange={handleChange} value={values.email} required/>
          </div>
          <div className="mb-3">
              <label className='form-label'>Contraseña</label>
              <input type="password" className='form-control' name='password' onChange={handleChange} value={values.password} required/>
          </div>
          <button className='btn btn-outline-primary' type='submit' disabled={isSubmitting} >Iniciar sesion</button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login