import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'
import UserList from './UserList'

export default function App() {
  const count = useSelector((store) => store.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <UserList />
    </div>
  )
}