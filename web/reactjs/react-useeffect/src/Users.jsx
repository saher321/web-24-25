import { useEffect } from "react";
import { useState } from "react"
import UserCard from "./components/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading,  setLoading] = useState(true);

  useEffect(()=>{
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      if (!users) {
        console.log("Error")
      } else {
        setUsers(users)
        setLoading(false)
      }

    }
    fetchUsers();
  })

  return (
    <div>
      <h1>Users</h1>
      { loading ? 
      <div>
        <small><i>Loading...</i></small>
      </div> : 
      <>
      {users.length > 0 ? 
      <div className="card-wrapper">
        {users.map((user, i)=>{
          return (
            <UserCard key={i} user={user} />
          )
        })}
      </div> : 
      <small><i>No users</i></small>
      }
      </>
    }
    </div>
  )
}

export default Users