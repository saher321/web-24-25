import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router';
import { SIGNUP_URL } from '../../resources/api';

const Signup = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    try {
      setIsLoading(true);
      const result = await axios.post(SIGNUP_URL, data);
      if (result.data.status == true) {
        toast.success(result.data.message);
        navigate('/auth/login');
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
    <>
      <main>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <label htmlFor="">Name</label>
          <input {...register('name')} type="text" placeholder="Enter your name" /> <br /> <br />
          
          <label htmlFor="">Email</label>
          <input {...register('email')} type="email" placeholder="Enter your email" /> <br /> <br />
          
          <label htmlFor="">Password</label>
          <input {...register('password')} type="password" placeholder="Enter your password" />
          <br />
          <br />
          {
            isLoading ?
            <button type="submit" disabled>Signing up please wait...</button>:
            <button type="submit">Signup</button>
          }
        </form>
        <hr />
        <NavLink to={'/auth/login'}>Goto Login</NavLink>
      </main>
    </>
  );
};

export default Signup