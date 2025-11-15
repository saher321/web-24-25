import Notes from '../models/notesModel.js'

export const getNotes = async (req, res) => {
  const notes = await Notes.find({});
  return res.send({ status: true, notes });
}

export const createNote = async (req, res) => {
  const note = req.body
  // console.log(note.title)
  if (!note.title || !note.description) {
    return res.send({status: false, message: "Form fields are required"})
  }

  try {
    const result = await Notes.create(note)
    if (result) {
      return res.send({status: true, message: "Note saved successfully"})
    } else {
      return res.send({status: false, message: "Failed to store note"})
    }
  } catch (error) {
    return res.send({status: false, message: "Something went wrong!"})
  } finally {
    return res.send({status: false, message: "Internal server error"})
  }
}

export const deleteNote = async (req, res) => {
  const id = req.params.id;
  const notes = await Notes.findByIdAndDelete({ _id: id });
  if (notes) {
    return res.send({ status: true, message: "Note deleted successfully" });
  } else {
    return res.send({ status: false, message: "Note not found or it maybe deleted" });
  }
}

export const detailNote = async (req, res) => {
  const id = req.params.id;
  try {
    const note = await Notes.findById({_id: id});
    if (note) {
      return res.send({status: true, note})
    } else {
      return res.send({status: false, message: "Note not found or maybe deleted"})
    }
  } catch (error) {
    console.log("Error: ", error)
  }
}

export const updateNote = async (req, res) => {
  const id = req.params.id;
  const note = req.body;

  try {
    const result = await Notes.findByIdAndUpdate({_id: id}, note)
    if (result) {
      return res.send({status: true, message: "Note updated successfully"})
    } else {
      return res.send({status: false, message: "Failed to update note"})
    }
  } catch (error) {
    return res.send({status: false, message: "Network error"})
  }
}
