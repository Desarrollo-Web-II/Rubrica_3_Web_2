import React, {useEffect, useState} from 'react'
import {Formik, Form} from 'formik'
import { useBookings } from '../context/BookingProvider.jsx'
import { useParams } from 'react-router-dom'

const BookingForm = () => {
    const [booking, setBooking] = useState({
        codigo_habitacion: "",
        nombre_cliente: "",
        telefono_cliente: "",
        fecha_reservacion: "",
        fecha_entrada: "",
        fecha_salida: ""
    })
    const {createBookings, obtBooking, updateBooking} = useBookings()
    const {codigo} = useParams()
    console.log(codigo)
    useEffect(()=>{
        const cargarBooking = async()=>{
            if(codigo){
                const reserva = await obtBooking(codigo)
                setBooking(reserva)
            }
        }
        cargarBooking()
    },[])
  return (
    <div>
        <h2>
            {
                codigo ? 'Edicion de Reserca' : 'Crear Reserva'
            }
        </h2>
        <Formik
            initialValues={booking}
            enableReinitialize={true}
            onSubmit={async(values, actions)=>{console.log(values)
                if (codigo) {
                    await updateBooking(codigo, values)
                } else {
                     await createBookings(values)
                }
                
                //actions.resetForm()
                setBooking({
                    codigo_habitacion: "",
                    nombre_cliente: "",
                    telefono_cliente: "",
                    fecha_reservacion: "",
                    fecha_entrada: "",
                    fecha_salida: ""
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
                                        <label class='form-label'>Codigo de Habitacion</label>
                                        <input type="number" class="form-control" placeholder='Ingrese el codigo de Habitacion' name='codigo_habitacion' onChange={handleChange} value={values.codigo_habitacion}/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label class='form-label'>Nombre de Cliente</label>
                                        <input type="text" class="form-control" placeholder='Ingrese su nombre' name='nombre_cliente' onChange={handleChange} value={values.nombre_cliente}/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label class='form-label'>Telefono de Cliente</label>
                                        <input type="number" class="form-control" name='telefono_cliente' onChange={handleChange} value={values.telefono_cliente}/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label class='form-label'>Fecha de reserva</label>
                                        <input type="number" class="form-control" name='fecha_reservacion' onChange={handleChange} value={values.fecha_reservacion}/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label class='form-label'>Fecha de entrada</label>
                                        <input type="number" class="form-control" name='fecha_entrada' onChange={handleChange} value={values.fecha_entrada}/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label class='form-label'>Fecha de salida</label>
                                        <input type="number" class="form-control" name='fecha_salida' onChange={handleChange} value={values.fecha_salida}/>
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

export default BookingForm