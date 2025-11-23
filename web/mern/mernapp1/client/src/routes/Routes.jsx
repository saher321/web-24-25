import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import NotesList from '../pages/NotesList'
import CreateNote from '../pages/CreateNote';
import DetailNote from '../pages/DetailNote';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgotPassword';
import VerifyOTP from '../pages/auth/VerifyOTP';
import ResetPassword from '../pages/auth/ResetPassword';

const Routes = () => {

  const router = createBrowserRouter([
    { path: '/auth/signup', element: <Signup />},
    { path: '/auth/login', element: <Login />},
    { path: '/auth/forgot-password', element: <ForgotPassword />},
    { path: '/auth/verify-otp', element: <VerifyOTP />},
    { path: '/auth/reset-password', element: <ResetPassword />},

    { path: '/', element: <NotesList /> },
    { path: '/notes/create', element: <CreateNote /> },
    { path: '/notes/:id', element: <DetailNote /> },
    { path: '*', element: <Navigate to={'/'} replace /> }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default Routes