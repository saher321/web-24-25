import express from 'express'
import { createNote, getNotes } from '../controllers/notesController.js';

const notesRoute = express.Router();

notesRoute.get('/notes', getNotes);
notesRoute.post('/notes/create', createNote)

export default notesRoute