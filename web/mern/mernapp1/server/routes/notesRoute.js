import express from 'express'
import { createNote, deleteNote, detailNote, getNotes, updateNote } from '../controllers/notesController.js';

const notesRoute = express.Router();

// http://localhost:5000/api/v1/notes
notesRoute.get('/notes', getNotes);
notesRoute.post('/notes/create', createNote)
notesRoute.delete('/notes/delete/:id', deleteNote)
notesRoute.get('/notes/detail/:id', detailNote)
notesRoute.patch('/notes/update/:id', updateNote)

export default notesRoute