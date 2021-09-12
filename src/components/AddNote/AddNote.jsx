import React, { useContext, useState } from "react";
import NoteContext from "../../context/notes/NoteContext";

const AddNote = () => {
  const contextData = useContext(NoteContext);
  const { addNote } = contextData;

  const [enteredNote, setEnteredNote] = useState({
    title: "",
    description: "",
    tage: "",
  });

  const inpChangeHandler = (event) => {
    setEnteredNote({
      ...enteredNote,
      [event.target.name]: [event.target.value],
    });
  };
  return (
    <>
      <div className="container ">
        <h1 className="addNote">Add a new Note</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="email"
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
            <label htmlFor="exampleInputPassword1" className="form-label">
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
