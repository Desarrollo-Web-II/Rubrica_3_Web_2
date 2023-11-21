import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Rooms from './pages/Rooms.jsx'
import Formulario from './pages/Formulario.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from './components/Navbar.jsx'
import { RoomContextProvider } from './context/RoomProvider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RoomContextProvider>
      <Navbar></Navbar>
      <h1>Cliente</h1>
      <Routes>
        <Route path='/' element={<Rooms></Rooms>}></Route>
        <Route path='/nuevo' element={<Formulario></Formulario>}></Route>
        <Route path='/editar/:id' element={<Formulario></Formulario>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </RoomContextProvider>
  )
}

export default App
