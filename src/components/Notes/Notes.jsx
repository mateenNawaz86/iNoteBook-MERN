import React, { useContext } from "react";
import NoteContext from "../../context/notes/NoteContext";
import AddNote from "../AddNote/AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  // Received notes from NotesState component
  const contextData = useContext(NoteContext);
  const { notes } = contextData;

  return (
    <>
      <AddNote />
      <div className="container ">
        <h2>Your Notes is here!</h2>

        <div className="row my-4">
          {/* Loop over the notes array */}
          {notes.map((noteItem, index) => {
            return <NoteItem key={index} notesData={noteItem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
