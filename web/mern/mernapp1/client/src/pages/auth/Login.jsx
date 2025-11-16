import React from 'react'
import { NavLink } from 'react-router'

const Login = () => {
  return (
    <main>
        <h2>Login</h2>
        <form>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter your email" /> <br /> <br />
          
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter your password" />
          <br />
          <br />

          <button type="submit">Login</button>

        </form>
        <hr />
        <NavLink to={'/auth/forgot-password'}>Forgot your password? click here</NavLink> <br />
        <NavLink to={'/auth/signup'}>Goto Signup</NavLink>
      </main>
  )
}

export default Login