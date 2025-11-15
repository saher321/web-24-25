import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import { NavLink, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { CREATE_NOTE } from '../resources/api';

const CreateNote = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handleSaveNote = async (data) => {

    if (!data.title || !data.description) {
      toast.error("Form fields are required")
      return;
    }

    try {
      const result = await axios.post(CREATE_NOTE, data)
      if (result.data.status == true) {
        toast.success("Note saved successfully")
        reset();
        navigate('/')
      } else {
        toast.error("Failed to store note")
        return;
      }
    } catch (error) {      
      toast.error("Something went wrong")
    }
  }
  return (
    <>
      <Navbar>
        <NavLink to={'/'}>All Notes</NavLink>
      </Navbar>
      <main>
      <h2>Create note</h2>
        <form onSubmit={handleSubmit(handleSaveNote)}>
          <label htmlFor="">Title</label>
          <input { ...register("title") } type="text" placeholder='Enter note title' /> <br /> <br />
          <label htmlFor="">Description</label>
          <textarea { ...register("description") } placeholder='Enter note description' rows={5} cols={25}></textarea> <br /><br />
          <button type='submit'>Save note</button>
        </form>
      </main>  
    </>
  )
}

export default CreateNote