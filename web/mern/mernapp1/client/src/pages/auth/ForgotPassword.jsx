import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router'
import { FORGOT_PASSWORD_URL } from '../../resources/api';
import axios from 'axios';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (data) => {
    try {
      setIsLoading(true);
      const result = await axios.post(FORGOT_PASSWORD_URL, data);
      if (result.data.status == true) {
        toast.success(result.data.message);
        localStorage.setItem("forgotUserEmail", data.email)
        navigate('/auth/reset-password'); // note list
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
        <h2>Forgot your password</h2>
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <label htmlFor="">Email</label>
          <input {...register('email')}  type="email" placeholder="Enter your email" />
          <br />
          <br />

          { isLoading ?
          <button type="submit" disabled>Sending OTP, please wait...</button> :
          <button type="submit">Send OTP</button>
          }

        </form>
        <hr />
        <NavLink to={'/auth/login'}>Goto Login</NavLink>
      </main>
  )
}

export default ForgotPassword