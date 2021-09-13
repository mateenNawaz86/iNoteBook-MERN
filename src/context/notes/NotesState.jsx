import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NotesState = (props) => {
  const host = "http://localhost:5000";
  const hardNotes = [];

  const [notes, setNotes] = useState(hardNotes);

  // Get all notes
  const getAllNotes = async () => {
    // API call
    let url = `${host}/api/notes/fetchAllNotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authen-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzYzQ3NDRmNGIyZjEzM2I3OGE0NGZjIn0sImlhdCI6MTYzMTM0MDM4MH0.M2nMMd5oLnn5CNRiyPta2LrOdKf6s5vysPg2XKPDkHk",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a NEW note
  const addNote = async (title, description, tage) => {
    // API call
    let url = `${host}/api/notes/addNewNote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authen-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzYzQ3NDRmNGIyZjEzM2I3OGE0NGZjIn0sImlhdCI6MTYzMTM0MDM4MH0.M2nMMd5oLnn5CNRiyPta2LrOdKf6s5vysPg2XKPDkHk",
      },
      body: JSON.stringify({ title, description, tage }),
    });
    const json = response.json();

    const newNote = {
      _id: "613c760abc3d3a6f91b5465f",
      user: "613c4744f4b2f133b78a44fc",
      title: title,
      description: description,
      tage: tage,
      date: "2021-09-11T09:25:30.818Z",
      __v: 0,
    };

    // add note to previous note list with the help of concat method
    setNotes(notes.concat(newNote));
  };

  // Delete an existing note
  const deleteNote = (id) => {
    // TODO: API calls

    // show the existing notes after perform the delete operation
    const newNotes = notes.filter((noteItem) => {
      return noteItem._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit an existing note
  const editNote = async (id, title, description, tage) => {
    // API call
    let url = `${host}/api/notes/updateNote/${id}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authen-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzYzQ3NDRmNGIyZjEzM2I3OGE0NGZjIn0sImlhdCI6MTYzMTM0MDM4MH0.M2nMMd5oLnn5CNRiyPta2LrOdKf6s5vysPg2XKPDkHk",
      },
      body: JSON.stringify({ title, description, tage }),
    });
    const json = response.json();

    // edit a note on client side
    for (let ind = 0; ind < notes.length; ind++) {
      const element = notes[ind];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tage = tage;
      }
    }
  };

  return (
    <>
      <NoteContext.Provider
        value={{ notes, addNote, deleteNote, editNote, getAllNotes }}
      >
        {props.children}
      </NoteContext.Provider>
    </>
  );
};

export default NotesState;
