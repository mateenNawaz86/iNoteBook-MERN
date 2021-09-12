import React, { useContext, useState } from "react";
import NoteContext from "../../context/notes/NoteContext";

const AddNote = () => {
  
  // function from NotesState create a brand new NOTE
  const contextData = useContext(NoteContext);
  const { addNote } = contextData;

  // state for handling with input field values
  const [enteredNote, setEnteredNote] = useState({
    title: "",
    description: "",
    tage: "",
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
    addNote(enteredNote.title, enteredNote.description, enteredNote.tage);
  };

  return (
    <>
      <div className="container ">
        <h1 className="addNote">Add a new Note</h1>
        <form className="my-3" onSubmit={addNoteHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={inpChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={inpChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tage" className="form-label">
              Tage
            </label>
            <input
              type="text"
              className="form-control"
              id="tage"
              name="tage"
              onChange={inpChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
