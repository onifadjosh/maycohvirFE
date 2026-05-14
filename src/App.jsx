// import React from 'react'
// import Button from './components/button'

// const App = () => {
//   let design = {color:"red", backgroundColor:"black"}
//   let name = "pampam"
//   return (
//     <div>
//       <h1 style={{color:"red", backgroundColor:"black"}}>Hello, this is my first react application</h1>


//       <h1 style={design}>Hello, this is my first react application</h1>


//       <h1 className='person'>This is obviously a try out</h1>


//       <h1 className='bg-dark text-danger'>This is a design from bootstrap by {name}</h1>


//       <Button/>
//       <Button/>





//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  // const [first, setfirst] = useState(second)

  const [name, setname] = useState("josh")
  const [number, setnumber] = useState(0)

  const changeName=()=>{
    setname("pampam")
  }

  const changeNum=()=>{
    setnumber(number+1)
    console.log(number);
    
  }
  
  return (
    <div>

      <button onClick={changeName}>{name}</button>

      <button onClick={changeNum}>{number}</button>
    </div>
  )
}

export default App