import * as Yup from "yup";
import { Note } from "../models/note.model";

const noteSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  date: Yup.string().required("Date is required"),
  category: Yup.string().required("Category is required"),
  content: Yup.string().required("Content is required"),
});

export const validateNoteSchema = async (note: Note): Promise<void> => {
  await noteSchema.validate(note, { abortEarly: false });
};
