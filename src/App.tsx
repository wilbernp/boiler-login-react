import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  
  return (
    <Routes>
      
      <Route element={<ProtectedRoutes/>}>
        <Route path='/' element={<Home/>}/>
      </Route>

      <Route path='auth'>
        <Route path='login' element={<Login/>}/>
      </Route>
    </Routes>
  )
}
