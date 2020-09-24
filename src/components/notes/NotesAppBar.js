import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUpLoading } from "../../actions/notes";

export const NotesAppBar = () => {
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureSave = () => {
    document.querySelector("#fileSelector").click()
  };
  const dispatch = useDispatch()

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if(file){
      dispatch(startUpLoading(file))
    }
  };

  return (
    <div className="notes_appbar">
      <span>28 de agosto 2020</span>
      <input
        id="fileSelector"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureSave}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
