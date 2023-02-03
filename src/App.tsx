import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import useFetch from './custom-hooks/useFetch'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { useAppDispatch } from './redux/hooks'
import { IUser } from './types/user'
import userAdapter from './adapters/user.adapter'

import localStorageHandle from './utils/localStorage.handle'
import userService from './services/user.service'
import { setUser } from './redux/states/user.slice'

export default function App() {
  const dispatch = useAppDispatch()
  const [profile, fetchProfile] = useFetch<IUser>(succesProfile)
  function succesProfile(profile:IUser){
    const cleanData = userAdapter(profile)
    dispatch(setUser(cleanData))
  }
  useEffect(() => {
    const token = localStorageHandle.getItem("token")
    if (token) {
      fetchProfile(userService.getProfile())
    }
  }, [])
  
  return (
    <Routes>
      <Route path='/'>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home />} />
        </Route>
      </Route>

      <Route path='auth'>
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  )
}
