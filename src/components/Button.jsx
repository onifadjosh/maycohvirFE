import React from 'react'

const Button = () => {

    const shout =(name)=>{
        alert(`I am shoutingggggggg ${name}`)
    }
  return (
    <button className='btn btn-success ' onClick={()=>shout("Pampam")}>Buy me</button>
  )
}

export default Button