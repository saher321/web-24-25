import { useEffect } from "react";
import { useState } from "react"
import UserCard from "../components/UserCard";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { USERS_API } from "../resources/strings";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("")
  const [loading,  setLoading] = useState(true);

  useEffect(()=>{
    const fetchUsers = async () => {
      const response = await fetch(USERS_API);
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
      <Navbar />
      <h1>Users</h1>
      { loading ? 
      <div>
        <small><i>Loading...</i></small>
      </div> : 
      <>
        <div style={{margin: "12px 0px"}}>
          <input type="text" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
            placeholder="Search here..." 
          />
        </div>
      {users.length > 0 ? 
      <div className="card-wrapper">
        
        {users.map((user, i)=>{
          return (
            <NavLink key={i} to={`/users/${user.id}`}>
              <UserCard user={user} />
            </NavLink>
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