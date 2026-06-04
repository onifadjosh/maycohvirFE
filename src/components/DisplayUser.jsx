import React, { useState } from 'react'

const DisplayUser = ({allUsers, deleteUser, editUser}) => {
    const [currentIndex, setcurrentIndex] = useState(null)

    const [firstName, setfirstName] = useState("")
          const [lastName, setlastName] = useState("")
          const [email, setemail] = useState("")
          const [password, setpassword] = useState("")
  return (
    <div> <div className='d-flex gap-2 flex-wrap'>
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
    


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input type="text"  placeholder='first name' onChange={(event)=>setfirstName(event.target.value)}/>

      <input type="text" placeholder='last name' onChange={(e)=>setlastName(e.target.value)}/>

      <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>

      <input type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>editUser(currentIndex, {firstName, lastName, email, password})} data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
    
    </div>
  )
}

export default DisplayUser