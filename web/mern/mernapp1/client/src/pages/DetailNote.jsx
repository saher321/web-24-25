
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import { NavLink, useParams } from 'react-router';
import toast from 'react-hot-toast';
import { DETAIL_NOTE } from '../resources/api';
import { useEffect } from 'react';
import axios from 'axios';

const DetailNote = () => {
  const { register, handleSubmit, reset } = useForm();
  const params = useParams();

  useEffect(() => {
    const detailNote = async () => {
      try {
        const response = await axios.get(`${DETAIL_NOTE}/${params.id}`);
        if (response.data && response.data.status == true){
          reset(response.data.note)
        }
      } catch (error) {
        console.log("Error ", error);
      }
    }

    detailNote();
  }, [params.id]);

  const handleUpdateNote = async (data) => {

    try {
      console.log(data);
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
      <h2>Detail note</h2>
        <form onSubmit={handleSubmit(handleUpdateNote)}>
          <label htmlFor="">Title</label>
          <input { ...register("title") } type="text" placeholder='Enter note title' /> <br /> <br />
          <label htmlFor="">Description</label>
          <textarea { ...register("description") } placeholder='Enter note description' rows={5} cols={25}></textarea> <br /><br />
          <button type='submit'>Update note</button>
        </form>
      </main>  
    </>
  )
}

export default DetailNote