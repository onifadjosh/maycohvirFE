import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
  const user = useSelector((state)=>state.username)
  return (
    <div>This is also {user} contact page, message us at +2349024435588</div>
  )
}

export default Contact