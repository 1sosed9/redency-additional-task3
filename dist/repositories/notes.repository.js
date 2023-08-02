"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNote = exports.updateNote = exports.addNote = exports.getNoteById = exports.getAllNotes = exports.addInitialData = void 0;
const notes = [];
// Додавання початкових даних
const addInitialData = () => {
    const initialData = [
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
exports.addInitialData = addInitialData;
const getAllNotes = () => {
    return notes;
};
exports.getAllNotes = getAllNotes;
const getNoteById = (id) => {
    return notes.find((note) => note.id === id);
};
exports.getNoteById = getNoteById;
const addNote = (note) => {
    notes.push(note);
    return note;
};
exports.addNote = addNote;
const updateNote = (id, updatedNote) => {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
        notes[index] = Object.assign(Object.assign({}, notes[index]), updatedNote);
        return notes[index];
    }
};
exports.updateNote = updateNote;
const removeNote = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
    }
};
exports.removeNote = removeNote;
