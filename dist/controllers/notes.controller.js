"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.createNote = exports.getNoteById = exports.getAllNotes = void 0;
const NotesService = __importStar(require("../services/notes.service"));
const ValidationHelper = __importStar(require("../helpers/validation.helper"));
const getAllNotes = (_req, res) => {
    const notes = NotesService.getAllNotes();
    res.json(notes);
};
exports.getAllNotes = getAllNotes;
const getNoteById = (req, res) => {
    const { id } = req.params;
    const note = NotesService.getNoteById(id);
    if (note) {
        res.json(note);
    }
    else {
        res.status(404).json({ error: 'Note not found' });
    }
};
exports.getNoteById = getNoteById;
const createNote = (req, res) => {
    try {
        const newNote = req.body;
        ValidationHelper.validateNoteSchema(newNote);
        const createdNote = NotesService.createNote(newNote);
        res.status(201).json(createdNote);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.createNote = createNote;
const updateNote = (req, res) => {
    const { id } = req.params;
    const updatedNote = req.body;
    ValidationHelper.validateNoteSchema(updatedNote);
    const note = NotesService.updateNote(id, updatedNote);
    if (note) {
        res.json(note);
    }
    else {
        res.status(404).json({ error: 'Note not found' });
    }
};
exports.updateNote = updateNote;
const deleteNote = (req, res) => {
    const { id } = req.params;
    NotesService.deleteNote(id);
    res.status(204).send();
};
exports.deleteNote = deleteNote;
