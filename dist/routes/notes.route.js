"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/notes.route.ts
const express_1 = require("express");
const notes_controller_1 = require("../controllers/notes.controller");
const router = (0, express_1.Router)();
router.get('/notes', notes_controller_1.getAllNotes);
router.get('/notes/:id', notes_controller_1.getNoteById);
router.post('/notes', notes_controller_1.createNote);
router.patch('/notes/:id', notes_controller_1.updateNote);
router.delete('/notes/:id', notes_controller_1.deleteNote);
exports.default = router;
