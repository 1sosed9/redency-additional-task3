"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNote = exports.updateNote = exports.addNote = exports.getNoteById = exports.getAllNotes = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'db',
    database: 'notesdb',
    password: '1111',
    port: 5432,
});
const getAllNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool.query('SELECT * FROM notes');
    return rows;
});
exports.getAllNotes = getAllNotes;
const getNoteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool.query('SELECT * FROM notes WHERE id = $1', [id]);
    return rows[0];
});
exports.getNoteById = getNoteById;
const addNote = (note) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, date, content, category, archived } = note;
    const query = 'INSERT INTO notes (id, name, date, content, category, archived) VALUES ($1, $2, $3, $4, $5, $6)';
    yield pool.query(query, [id, name, date, content, category, archived]);
    return note;
});
exports.addNote = addNote;
const updateNote = (id, updatedNote) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, date, content, category, archived } = updatedNote;
    const query = 'UPDATE notes SET name = $1, date = $2, content = $3, category = $4, archived = $5 WHERE id = $6';
    const { rowCount } = yield pool.query(query, [name, date, content, category, archived, id]);
    if (rowCount > 0) {
        return updatedNote;
    }
});
exports.updateNote = updateNote;
const removeNote = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'DELETE FROM notes WHERE id = $1';
    yield pool.query(query, [id]);
});
exports.removeNote = removeNote;
