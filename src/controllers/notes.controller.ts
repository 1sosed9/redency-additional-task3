import { Request, Response } from 'express';
import * as NotesService from '../services/notes.service';
import { Note } from '../models/note.model';
import * as ValidationHelper from '../helpers/validation.helper';

export const getAllNotes = (_req: Request, res: Response): void => {
  const notes = NotesService.getAllNotes();
  res.json(notes);
};

export const getNoteById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const note = NotesService.getNoteById(id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
};

export const createNote = (req: Request, res: Response): void => {
    try {
      const newNote: Note = req.body;
      ValidationHelper.validateNoteSchema(newNote); 
      const createdNote = NotesService.createNote(newNote);
      res.status(201).json(createdNote);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  };
  

export const updateNote = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updatedNote: Note = req.body;
  ValidationHelper.validateNoteSchema(updatedNote); 
  const note = NotesService.updateNote(id, updatedNote);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
};

export const deleteNote = (req: Request, res: Response): void => {
  const { id } = req.params;
  NotesService.deleteNote(id);
  res.status(204).send();
};
