import React, { useState } from 'react'

const AddUser = ({submitUser}) => {
     const [firstName, setfirstName] = useState("")
      const [lastName, setlastName] = useState("")
      const [email, setemail] = useState("")
      const [password, setpassword] = useState("")
  return (
    <div>
         <input type="text"  placeholder='first name' onChange={(event)=>setfirstName(event.target.value)}/>

<input type="text" placeholder='last name' onChange={(e)=>setlastName(e.target.value)}/>

<input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>

<input type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>

<button  onClick={()=>submitUser({firstName, lastName, email, password})}>Submit</button>
    </div>
  )
}

export default AddUser