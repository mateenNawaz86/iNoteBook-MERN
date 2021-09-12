import React, { useContext } from "react";
import NoteContext from "../../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const contextData = useContext(NoteContext);
  const { notes } = contextData;
  return (
    <>
      <div className="container ">
        <h2>Your Notes is here!</h2>

        <div className="row my-4">
          {notes.map((noteItem) => {
            return <NoteItem notesData={noteItem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
