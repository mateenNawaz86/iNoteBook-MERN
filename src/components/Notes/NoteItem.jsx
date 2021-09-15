import React, { useContext } from "react";
import NoteContext from "../../context/notes/NoteContext";

const NoteItem = (props) => {
  const contextData = useContext(NoteContext);
  const { deleteNote } = contextData;
  const { notesData, updateNotes } = props;

  return (
    <>
      <div className="col-lg-4">
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{notesData.title}</h5>
              <div className="icons">
                <i
                  className="far fa-trash-alt mx-1"
                  onClick={() => {
                    deleteNote(notesData._id);
                    props.showAlert("Delete you note successfully!", "warning");
                  }}
                />
                <i
                  className="far fa-edit mx-1"
                  onClick={() => {
                    updateNotes(notesData);
                  }}
                />
              </div>
            </div>
            <p className="card-text">{notesData.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
