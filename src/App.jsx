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

// import React, { useState } from 'react'

// const App = () => {
//   // const [first, setfirst] = useState(second)

//   const [name, setname] = useState("josh")
//   const [number, setnumber] = useState(0)

//   const changeName=()=>{
//     setname("pampam")
//   }

//   const changeNum=()=>{
//     setnumber(number+1)
//     console.log(number);
    
//   }
  
//   return (
//     <div>

//       <button onClick={changeName}>{name}</button>

//       <button onClick={changeNum}>{number}</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'


const App = () => {
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const [allUsers, setallUsers] = useState([])
  const [currentIndex, setcurrentIndex] = useState(null)

  // const handleChange=(event)=>{
  //   // console.log("sade");
  //   console.log(event.target.value);
  //   setfirstName(event.target.value) 
  // }
  const submitUsers=()=>{
    console.log("I am working oooooo");
    let user = {firstName, lastName, email, password}
    
    // let fruits = ['grape', "mango", "pineapple", "watermelon"]

    // let moreFruits = [...fruits, "banana", "tangerine"]

    // console.log(moreFruits);

    let newAllUsers = [...allUsers, user]

    setallUsers(newAllUsers)
    
  }

  const deleteUser=(index)=>{
    let newAllUsers = [...allUsers]

    newAllUsers.splice(index, 1)

    setallUsers(newAllUsers)


  }

  const editUser=(index)=>{
    let newAllUsers =[...allUsers]

    let editedAllUsers= {firstName, lastName, email, password}
    newAllUsers.splice(index, 1, editedAllUsers)

    setallUsers(newAllUsers)
  }
  return (
    <div>
      <input type="text"  placeholder='first name' onChange={(event)=>setfirstName(event.target.value)}/>

      <input type="text" placeholder='last name' onChange={(e)=>setlastName(e.target.value)}/>

      <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>

      <input type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>

      <button  onClick={()=>submitUsers()}>Submit</button>


      <hr />
    

     <div className='d-flex gap-2 flex-wrap'>
     {
        allUsers.map((user,index)=>(
          <div className="card" style={{width: "18rem"}} key={index}>
          <div className="card-body">
            <h5 className="card-title">{user.firstName+" "+user.lastName}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <div className='d-flex gap-2'>
              <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setcurrentIndex(index)}>Edit</button>

              <button className='btn btn-danger' onClick={()=>deleteUser(index)}>Delete</button>
            </div>
          </div>
        </div>
        ))
      }
     </div>

     



  



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input type="text"  placeholder='first name' onChange={(event)=>setfirstName(event.target.value)}/>

      <input type="text" placeholder='last name' onChange={(e)=>setlastName(e.target.value)}/>

      <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>

      <input type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>editUser(currentIndex)} data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default App