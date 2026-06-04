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

// import React from 'react'
// import { useState } from 'react'
// import Button from './components/button'
// import AddUser from './components/AddUser'
// import DisplayUser from './components/DisplayUser'


// const App = () => {
 

//   const [allUsers, setallUsers] = useState([])


//   // const handleChange=(event)=>{
//   //   // console.log("sade");
//   //   console.log(event.target.value);
//   //   setfirstName(event.target.value) 
//   // }
//   const submitUsers=(user)=>{
//     console.log("I am working oooooo");
//     // let user = {firstName, lastName, email, password}
    
//     // let fruits = ['grape', "mango", "pineapple", "watermelon"]

//     // let moreFruits = [...fruits, "banana", "tangerine"]

//     // console.log(moreFruits);

//     let newAllUsers = [...allUsers, user]

//     setallUsers(newAllUsers)
    
//   }

//   const deleteUser=(index)=>{
//     let newAllUsers = [...allUsers]

//     newAllUsers.splice(index, 1)

//     setallUsers(newAllUsers)


//   }

//   const editUser=(index, editedAllUsers)=>{
//     let newAllUsers =[...allUsers]

//     // let editedAllUsers= {firstName, lastName, email, password}
//     newAllUsers.splice(index, 1, editedAllUsers)

//     setallUsers(newAllUsers)
//   }
//   // const shoutme=()=>{
//   //   alert("shouting me")
//   // }

//   // const test=()=>{
//   //   alert("This is another test")
//   // }
//   return (
//     <div>
//       {/* <Button title="Start" color="btn-primary" func={shoutme}/>
//       <Button title="Pause" color="btn-warning" func={test}/>
//       <Button title="Stop" color="btn-danger"/> */}
      

//      <AddUser submitUser={submitUsers}/>
//       <hr />
//     <DisplayUser allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>

          {/* programmatic redirection */}
          <Route path='/info' element={<Navigate to={"/contact"}/>}/>

          {/* wild card routing */}
          <Route path='*' element={<Notfound/>}/>
      </Routes>

    </>
  )
}

export default App