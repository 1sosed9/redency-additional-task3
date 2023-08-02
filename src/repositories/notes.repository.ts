import { Note } from "../models/note.model";

const notes: Note[] = [];

// Додавання початкових даних
export const addInitialData = (): void => {
  const initialData: Note[] = [
    {
      id: "1",
      name: "name",
      date: new Date("2023-07-25T12:30:00").toString(),
      content: "Remember to buy groceries on 26/7/2023",
      category: "Task",
      archived: false,
    },
    {
      id: "2",
      name: "name",
      date: new Date("2023-07-24T18:45:00").toString(),
      content: "Had an interesting idea today!",
      category: "Idea",
      archived: false,
    },
    {
      id: "3",
      name: "name",
      date: new Date("2023-07-23T09:15:00").toString(),
      content: "What if we implement a new feature?",
      category: "Random Thought",
      archived: false,
    },
  ];

  notes.push(...initialData);
};

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
