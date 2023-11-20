import React from 'react'
import {Formik, Form} from 'formik'
import {CrearRoomRequest} from '../api/rooms.api'

const Formulario = () => {
  return (
    <div>
        <Formik
            initialValues={{
                numero: null,
                tipo: "",
                valor: null
            }}
            onSubmit={async(values, actions)=>{console.log(values)
            try {
                const response = await CrearRoomRequest(values)
                console.log(response)
                actions.resetForm()
            } catch (error) {
                console.log(error)
            }
            }}
        >
            {({handleChange, handleSubmit, values, isSubmitting})=>(
            <Form onSubmit={handleSubmit}>
                <label className='form-label'>Numero de Habitacion</label>
                <input type="number" placeholder='Ingrese el numero de Habitacion' name='numero' onChange={handleChange} value={values.numero}/>
                <label className='form-label'>Tipo de Habitacion</label>
                <input type="text" placeholder='Ingrese el tipo de Habitacion' name='tipo' onChange={handleChange} value={values.tipo}/>
                <label className='form-label'>Valor de Habitacion</label>
                <input type="number" placeholder='Ingrese el valor de Habitacion' name='valor' onChange={handleChange} value={values.valor}/>
                <button className='btn-form' type='submit' disabled={isSubmitting}>Guardar</button>
            </Form>
            )
            }
        </Formik>
    </div>
  )
}

export default Formulario