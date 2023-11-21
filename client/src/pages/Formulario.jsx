import React, { useEffect, useState } from 'react'
import {Formik, Form} from 'formik'
//import {CrearRoomRequest} from '../api/rooms.api'
//import { RoomContext } from '../context/RoomContext.jsx'
import { useRooms } from '../context/RoomProvider.jsx'
import { useParams } from 'react-router-dom'
//import { useContext } from 'react'

const Formulario = () => {
    const [room, setRoom] = useState({
        numero: "",
        tipo: "",
        valor: ""
    })
    const {createRooms, obtRoom, updateRoom} = useRooms()
    const {id} = useParams()
    useEffect(()=>{
        const cargarRoom = async()=>{
            if(id){
                const habitacion = await obtRoom(id)
                setRoom(habitacion)
            }
        }
        cargarRoom()
    },[])
    //console.log(text)
  return (
    <div>
        <h2>
            {
                id ? 'Edicion de Habitacion' : 'Registro de Habitaciones'
            }
        </h2>
        <Formik
            initialValues={room}
            enableReinitialize={true}
            onSubmit={async(values, actions)=>{console.log(values)
                if (id) {
                    await updateRoom(id, values)
                } else {
                     await createRooms(values)
                }
                
                //actions.resetForm()
                setRoom({
                    numero: "",
                    tipo: "",
                    valor: ""
                })
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