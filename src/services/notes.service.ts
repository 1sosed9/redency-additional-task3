import * as NotesRepo from '../repositories/notes.repository';
import { Note } from '../models/note.model';

export const getAllNotes = async (): Promise<Note[]> => {
  return NotesRepo.getAllNotes();
};

export const getNoteById = async (id: string): Promise<Note | undefined> => {
  return NotesRepo.getNoteById(id);
};

export const createNote = async (note: Note): Promise<Note> => {
  return NotesRepo.addNote(note);
};

export const updateNote = async (id: string, updatedNote: Note): Promise<Note | undefined> => {
  return NotesRepo.updateNote(id, updatedNote);
};

export const deleteNote = async (id: string): Promise<void> => {
  return NotesRepo.removeNote(id);
};
