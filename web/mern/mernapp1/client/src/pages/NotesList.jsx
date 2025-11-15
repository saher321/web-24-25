import { useEffect, useState } from "react";
import { ALL_NOTES, DELETE_NOTES } from "../resources/api.js";
import toast from "react-hot-toast";
import axios from 'axios'
import Navbar from "../components/Navbar.jsx";
import { NavLink } from "react-router";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getNotes = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(ALL_NOTES);
        const data = await res.json();
        console.log(data.notes);
        if (data) {
          setNotes(data.notes);
          setIsLoading(false)
        } else {
          toast.error("Failed to show notes");
        }
      } catch (error) {
        setIsLoading(false)
        toast.error("Somthing went wrong");
      }
    };
  useEffect(() => {
    getNotes();
  }, []);

  const handleDeleteNote = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you want to delete this?")) return;
    const ok = await axios.delete(`${DELETE_NOTES}/${id}`)

    if (ok) {
      toast.success("Note deleted")
      await getNotes();
    } else {
      toast.error("Note not deleted")
    }

  }

  return (
    <>
    <Navbar>
      <NavLink to={'/notes/create'}>Create Note</NavLink>
    </Navbar>
    <main>
    <h2>All Notes</h2>
      {
        isLoading == true ? 
        <div>Loading, please wait...</div> :
        <table border={1} width="100%" cellPadding="16px" cellSpacing={0}>
        <thead>
          <th>SR#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            notes.length > 0 ?
            notes.map((note, i) => {
            return (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td className="action-btn">
                  <NavLink onClick={(e) => handleDeleteNote(e, note._id)}>Delete</NavLink> {" "} | {" "}
                  <NavLink to={`/notes/${note._id}`}>Edit</NavLink>
                </td>
              </tr>
            );
          }) : 
          <tr> <td colSpan={4} align="center">No notes added yet</td></tr>
          }
        </tbody>
      </table>
      }
    </main>
    </>
  );
};

export default NotesList;
