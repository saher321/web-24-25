import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router'
import { LOGIN_URL } from '../../resources/api';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      setIsLoading(true);
      const result = await axios.post(LOGIN_URL, data);
      if (result.data.status == true) {
        toast.success(result.data.message);
        localStorage.setItem("userToken", result.data.userToken)
        navigate('/'); // note list
        return;
      } else {
        toast.error(result.data.message);
        return;
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label htmlFor="">Email</label>
          <input {...register('email')}  type="email" placeholder="Enter your email" /> <br /> <br />
          
          <label htmlFor="">Password</label>
          <input {...register('password')}  type="password" placeholder="Enter your password" />
          <br />
          <br />

          { isLoading ?
          <button type="submit" disabled>Logging please wait...</button> :
          <button type="submit">Login</button>
          }

        </form>
        <hr />
        <NavLink to={'/auth/forgot-password'}>Forgot your password? click here</NavLink> <br />
        <NavLink to={'/auth/signup'}>Goto Signup</NavLink>
      </main>
  )
}

export default Login