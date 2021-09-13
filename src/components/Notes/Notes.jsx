import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../../context/notes/NoteContext";
import AddNote from "../AddNote/AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  // Received notes from NotesState component
  const contextData = useContext(NoteContext);
  const { notes, getAllNotes } = contextData;

  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);

  // state for handling with input field values
  const [enteredNote, setEnteredNote] = useState({
    editTitle: "",
    editDescription: "",
    editTage: "",
  });

  // function for getting input values
  const inpChangeHandler = (event) => {
    setEnteredNote({
      ...enteredNote,
      [event.target.name]: event.target.value,
    });
  };

  // function for addiing new NOTE in the given array
  const addNoteHandler = (event) => {
    event.preventDefault();
  };

  const updateNote = (curNote) => {
    ref.current.click();
    setEnteredNote({
      editTitle: curNote.title,
      editDescription: curNote.description,
      editTage: curNote.tage,
    });
  };

  const ref = useRef(null);
  return (
    <>
      <AddNote />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        ref={ref}
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form className="my-2" onSubmit={addNoteHandler}>
                  <div className="mb-3">
                    <label htmlFor="editTitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editTitle"
                      name="editTitle"
                      aria-describedby="emailHelp"
                      onChange={inpChangeHandler}
                      value={enteredNote.editTitle}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editDescription" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editDescription"
                      name="editDescription"
                      onChange={inpChangeHandler}
                      value={enteredNote.editDescription}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editTage" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editTage"
                      name="editTage"
                      onChange={inpChangeHandler}
                      value={enteredNote.editTage}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <h2>Your Notes is here!</h2>

        <div className="row my-4">
          {/* Loop over the notes array */}
          {notes.map((noteItem, index) => {
            return (
              <NoteItem
                key={index}
                notesData={noteItem}
                updateNotes={updateNote}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
