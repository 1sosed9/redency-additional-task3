import { Request, Response } from "express";
import { Note } from "../models/note.model";
import * as NotesService from "../services/notes.service";

export const getStats = async (_req: Request, res: Response): Promise<void> => {
  const notes = await NotesService.getAllNotes();
  const stats = {
    totalNotes: notes.length,
    archivedNotes: notes.filter((note) => note.archived).length,
  };
  res.json(stats);
};
