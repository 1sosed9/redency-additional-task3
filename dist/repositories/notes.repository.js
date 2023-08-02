"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNote = exports.updateNote = exports.addNote = exports.getNoteById = exports.getAllNotes = void 0;
const notes = [
// Моковані записи додаткових нотатків розміщуються тут...
];
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
