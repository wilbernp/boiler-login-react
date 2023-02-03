import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import useFetch from './custom-hooks/useFetch'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { IUser } from './types/user'
import userAdapter from './adapters/user.adapter'

import userService from './services/user.service'
import { setIsAuth, setUser } from './redux/states/user.slice'
import useAuth from './custom-hooks/useAuth'

export default function App() {
  const dispatch = useAppDispatch()
  const {user} = useAppSelector(state => state)
  const [profile, fetchProfile] = useFetch<IUser>(succesProfile)
  // const navigate = useNavigate()
   const isAuth = useAuth({
    auth: "/auth/login",
    succesRedirect: "/",
    // excludes: ["/about"]
  },[user.isAuth])

  function succesProfile(profile: IUser) {
    const cleanData = userAdapter(profile)
    console.log("profile", profile)
    dispatch(setUser(cleanData))
    dispatch(setIsAuth(true))
  }

  useEffect(() => {
    if (isAuth) {
      fetchProfile(userService.getProfile())
    }
  }, [isAuth])
  
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
      </Route>

      <Route path='auth'>
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  )
}
