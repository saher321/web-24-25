import { useEffect, useState } from "react";
import { ALL_NOTES, DELETE_NOTES } from "../resources/api.js";
import toast from "react-hot-toast";
import axios from 'axios'

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await fetch(ALL_NOTES);
        const data = await res.json();
        console.log(data.notes);
        if (data) {
          setNotes(data.notes);
          toast.success("Notes fetched");
        } else {
          toast.error("Failed to show notes");
        }
      } catch (error) {
        toast.error("Somthing went wrong");
      }
    };
    getNotes();
  }, []);

  const handleDeleteNote = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you want to delete this?")) return;
    const ok = await axios.delete(`${DELETE_NOTES}/${id}`)

    if (ok) {
      toast.success("Note deleted")
      window.location.href = "http://localhost:5173/"
    } else {
      toast.error("Note not deleted")
    }

  }

  return (
    <div>
      {notes.map((note, i) => {
        return (
          <details key={i}>
            <summary>
              {note.title}
              <button onClick={(e) => handleDeleteNote(e, note._id)}>x</button>
            </summary>
            <p>{note.description}</p>
          </details>
        );
      })}
    </div>
  );
};

export default NotesList;
