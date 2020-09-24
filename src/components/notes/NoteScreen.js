import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const notes = useSelector((state) => state.notes);
  const { active: note } = notes;

  const [formsValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formsValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activeNote(formsValues.id, { ...formsValues }));
  }, [formsValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id))
  }
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Today was..."
          className="notes__textarea"
          value={body}
          name="body"
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img
              src={note.url}
              alt="land"
            />
          </div>
        )}
      </div>
          <button className="btn btn-danger" onClick={handleDelete}> Delete </button>

    </div>
  );
};
