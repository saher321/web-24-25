import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const App = () => {
  const { register, handleSubmit } = useForm();

  const handleSaveNote = async (data) => {

    if (!data.title || !data.description) {
      toast.error("Form fields are required")
      return;
    }

    try {
      const result = await axios.post("http://localhost:5000/api/v1/notes/create", data)
      if (result) {
        toast.success("Note saved successfully")
      } else {
        toast.error("Failed to store note")
      }
    } catch (error) {      
      toast.error("Something went wrong")
    }
  }

  return (
    <>
      <h2>CREATE NOTE</h2>

      <form onSubmit={handleSubmit(handleSaveNote)}>
        <input { ...register("title") } type="text" placeholder='Enter note title' /> <br /> <br />
        <textarea { ...register("description") } rows={5} cols={25}></textarea> <br /><br />
        <button type='submit'>Save note</button>
      </form>
    </>
  )
}

export default App