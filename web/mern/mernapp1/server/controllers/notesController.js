import Notes from '../models/notesModel.js'

export const getNotes = async (req, res) => {
  const notes = await Notes.find({});
  res.send({ status: true, notes });
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
      res.send({status: true, message: "Note saved successfully"})
    } else {
      res.send({status: false, message: "Failed to store note"})
    }
  } catch (error) {
    res.send({status: false, message: "Something went wrong!"})
  } finally {
    res.send({status: false, message: "Internal server error"})
  }
}