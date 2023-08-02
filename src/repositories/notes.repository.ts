import { Pool } from 'pg';
import { Note } from "../models/note.model";

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'notesdb',
  password: '1111',
  port: 5432,
});

export const getAllNotes = async (): Promise<Note[]> => {
  const { rows } = await pool.query('SELECT * FROM notes');
  return rows;
};

export const getNoteById = async (id: string): Promise<Note | undefined> => {
  const { rows } = await pool.query('SELECT * FROM notes WHERE id = $1', [id]);
  return rows[0];
};

export const addNote = async (note: Note): Promise<Note> => {
  const { id, name, date, content, category, archived } = note;
  const query = 'INSERT INTO notes (id, name, date, content, category, archived) VALUES ($1, $2, $3, $4, $5, $6)';
  await pool.query(query, [id, name, date, content, category, archived]);
  return note;
};

export const updateNote = async (id: string, updatedNote: Note): Promise<Note | undefined> => {
  const { name, date, content, category, archived } = updatedNote;
  const query = 'UPDATE notes SET name = $1, date = $2, content = $3, category = $4, archived = $5 WHERE id = $6';
  const { rowCount } = await pool.query(query, [name, date, content, category, archived, id]);
  if (rowCount > 0) {
    return updatedNote;
  }
};

export const removeNote = async (id: string): Promise<void> => {
  const query = 'DELETE FROM notes WHERE id = $1';
  await pool.query(query, [id]);
};
