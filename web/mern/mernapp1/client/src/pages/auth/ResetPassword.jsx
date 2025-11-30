import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router'
import { RESET_PASSWORD_URL } from '../../resources/api';
import axios from 'axios';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (data) => {
    try {
      setIsLoading(true);
      const newData = {
        email: localStorage.getItem("forgotUserEmail"),
        otp: data.otp,
        newPassword: data.newPassword
      }
      const result = await axios.post(RESET_PASSWORD_URL, newData);
      if (result.data.status == true) {
        toast.success(result.data.message);
        localStorage.removeItem("forgotUserEmail")
        navigate('/auth/login'); // note list
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
        <h2>Reset your password</h2>
        <form onSubmit={handleSubmit(handleResetPassword)}>
          <label htmlFor="">OTP</label>
          <input {...register('otp')}  type="number" placeholder="Enter otp you recieved" />
          <br />
          <br />

          <label htmlFor="">New Password</label>
          <input {...register('newPassword')}  type="text" placeholder="Enter new password" />
          <br />
          <br />

          { isLoading ?
          <button type="submit" disabled>Processing, please wait...</button> :
          <button type="submit">Save and verify</button>
          }

        </form>
        <hr />
        <NavLink to={'/auth/login'}>Goto Login</NavLink>
      </main>
  )
}

export default ResetPassword