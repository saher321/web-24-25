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