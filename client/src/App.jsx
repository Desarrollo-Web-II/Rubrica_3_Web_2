import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Rooms from './pages/Rooms.jsx'
import Formulario from './pages/Formulario.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from './components/Navbar.jsx'
import { RoomContextProvider } from './context/RoomProvider.jsx'
import { BookingContextProvider } from './context/BookingProvider.jsx'
import Login from './pages/Login.jsx'
import BookingForm from './pages/BookingForm.jsx'
import Bookings from './pages/Bookings.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RoomContextProvider>
    <BookingContextProvider>
      <Navbar/>
      <h1>Administrador</h1>
      <Routes>
        <Route path='/' element={<Rooms></Rooms>}></Route>
        <Route path='/nuevo' element={<Formulario></Formulario>}></Route>
        <Route path='/editar/:id' element={<Formulario></Formulario>}></Route>
        <Route path='/bookings' element={<Bookings></Bookings>}></Route>
        <Route path='/newbooking' element={<BookingForm></BookingForm>}></Route>
        <Route path='/bookform/:codigo' element={<BookingForm></BookingForm>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </BookingContextProvider>
    </RoomContextProvider>
  )
}

export default App
