import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setIsAuth } from '@/redux/states/user.slice'
import localStorageHandle from '@/utils/localStorage.handle'
import React from 'react'

export default function Home() {
  const {user} = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  console.log("user Home", user.username)
  function handleClick(){
    localStorageHandle.deleteItem("token")
    dispatch(setIsAuth(false))
  }
  return (
    <div>
      <h1>Home</h1>
      <h3>Name {user.username}</h3>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}
