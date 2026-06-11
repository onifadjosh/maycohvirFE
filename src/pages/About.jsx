import React from 'react'
import { useSelector } from 'react-redux'


const About = () => {
  const username = useSelector((state)=>state.username )
  const count = useSelector((state)=>state.count )

  return (
    <div>This is my about page  <h1>{username}</h1>   <h1>{count}</h1></div>
  )
}

export default About