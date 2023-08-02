import { Note } from "../models/note.model";

const notes: Note[] = [];

export const getAllNotes = (): Note[] => {
  return notes;
};

export const getNoteById = (id: string): Note | undefined => {
  return notes.find((note) => note.id === id);
};

export const addNote = (note: Note): Note => {
  notes.push(note);
  return note;
};

export const updateNote = (id: string, updatedNote: Note): Note | undefined => {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes[index] = { ...notes[index], ...updatedNote };
    return notes[index];
  }
};

export const removeNote = (id: string): void => {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
  }
};
