import express from "express";
import bookingsRoutes from './routes/bookings.rutas.js'
import roomsRoutes from './routes/rooms.rutas.js'
import userRoutes from './routes/users.rutas.js'
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({ 
    credentials: true
 }))
app.use(express.json())
app.use(cookieParser())
app.use('/api', bookingsRoutes)
app.use('/api', roomsRoutes)
app.use('/api', userRoutes)

app.use((req,res)=>{
    res.status(404).json({
        message:'Endpoint no encontrado'
    })
})

export default app