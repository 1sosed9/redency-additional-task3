import * as NotesRepo from '../repositories/notes.repository';
import { Note } from '../models/note.model';

export const getAllNotes = (): Note[] => {
  return NotesRepo.getAllNotes();
};

export const getNoteById = (id: string): Note | undefined => {
  return NotesRepo.getNoteById(id);
};

export const createNote = (note: Note): Note => {
  return NotesRepo.addNote(note);
};

export const updateNote = (id: string, updatedNote: Note): Note | undefined => {
  return NotesRepo.updateNote(id, updatedNote);
};

export const deleteNote = (id: string): void => {
  NotesRepo.removeNote(id);
};
