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
                id ? 'Edicion de Habitacion' : 'Crear de Habitaciones'
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
            <Form class="" onSubmit={handleSubmit}>
                <div class="card">
                    <div class="card shadow">
                        <div class="card-header">
                                <div class="row g-2">
                                    <div class="form-group col-md-4">
                                        <label class='form-label'>Numero de Habitacion</label>
                                        <input type="number" class="form-control" placeholder='Ingrese el numero de Habitacion' name='numero' onChange={handleChange} value={values.numero}/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label class='form-label'>Tipo de Habitacion</label>
                                        <input type="text" class="form-control" placeholder='Ingrese el tipo de Habitacion' name='tipo' onChange={handleChange} value={values.tipo}/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        {/* <label class='form-label'>Valor de Habitacion</label>
                                        <input type="number" class="form-control" placeholder='Ingrese el valor de Habitacion' name='valor' onChange={handleChange} value={values.valor}/> */}
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label class='form-label'>Valor de Habitacion</label>
                                        <input type="number" class="form-control" placeholder='Ingrese el valor de Habitacion' name='valor' onChange={handleChange} value={values.valor}/>
                                    </div>
                                    <div class="form-group col-12">
                                        <button class='btn btn-primary' type='submit' disabled={isSubmitting}>Guardar</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </Form>
            )
            }
        </Formik>
    </div>
  )
}

export default Formulario