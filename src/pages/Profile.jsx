import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams()

    console.log(params);
    console.log(params.username);
    
  return (
    <div>This is a profile for user {params.username}</div>
  )
}

export default Profile