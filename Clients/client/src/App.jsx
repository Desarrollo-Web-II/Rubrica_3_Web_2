import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Usuarios from './pages/Usuarios'
import Formulario from './pages/Formulario'
import NotFound from './pages/NotFound'
import Navbar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Cliente</h1> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Usuarios/> }/>
        <Route path='/nuevo' element={ <Formulario/> }/>
        <Route path='/*' element={ <NotFound/> }/>
      </Routes>
    </>
  )
}

export default App
