import React, { useContext, useState } from "react";
import NoteContext from "../../context/notes/NoteContext";

const AddNote = (props) => {
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
    setEnteredNote({
      title: "",
      description: "",
      tage: "",
    });
    props.showAlert("Add new note successfully!", "success");
  };

  return (
    <>
      <div className="container">
        <h1 className="addNote text-center text-info">Add a new Note</h1>
        <form
          className="my-2"
          onSubmit={addNoteHandler}
          style={{
            color: props.changeClr === "dark" ? "white" : "black",
          }}
        >
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
              value={enteredNote.title}
              style={{
                color: props.changeClr === "dark" ? "white" : "black",
                backgroundColor:
                  props.changeClr === "dark" ? "#212529" : "white",
              }}
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
              value={enteredNote.description}
              style={{
                color: props.changeClr === "dark" ? "white" : "black",
                backgroundColor:
                  props.changeClr === "dark" ? "#212529" : "white",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tage" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tage"
              name="tage"
              onChange={inpChangeHandler}
              value={enteredNote.tage}
              style={{
                color: props.changeClr === "dark" ? "white" : "black",
                backgroundColor:
                  props.changeClr === "dark" ? "#212529" : "white",
              }}
            />
          </div>
          <button
            disabled={
              enteredNote.title.length < 3 || enteredNote.description.length < 6
            }
            type="submit"
            className="btn btn-primary"
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
