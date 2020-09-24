import { db } from "../firebase/firebaseConfig";

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();

  const notes = [];

  notesSnap.forEach((s) => {
    notes.push({
      id: s.id,
      ...s.data(),
    });
  });

  return notes;
};
