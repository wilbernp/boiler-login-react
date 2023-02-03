import { useAppSelector } from '@/redux/hooks'
import React from 'react'

export default function Home() {
  const {user} = useAppSelector(state => state)
  console.log("user Home", user.username)
  return (
    <div>
      <h1>Home</h1>
      <h3>Name {user.username}</h3>
    </div>
  )
}
