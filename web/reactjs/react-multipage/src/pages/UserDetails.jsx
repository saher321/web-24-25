import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { USERS_API } from '../resources/strings';
import UserCard from '../components/UserCard';

const UserDetails = () => {
  const params = useParams();
  const userId = params.id;
  const [user, setUser] = useState({});
  const [loading,  setLoading] = useState(true);
  
  useEffect(()=>{
    const fetchUser = async () => {
      const response = await fetch(USERS_API + userId);
      const user = await response.json();
      if (!user) {
        console.log("Error")
      } else {
        setUser(user)
        setLoading(false)
      }

    }
    fetchUser();
  })
  return (
    <div>
      <Navbar />
      <h2>User detail</h2>
      { loading ? 
      <div>
        <small><i>Loading...</i></small>
      </div> : 
      <UserCard user={user} />
      }
    </div>
  )
}

export default UserDetails