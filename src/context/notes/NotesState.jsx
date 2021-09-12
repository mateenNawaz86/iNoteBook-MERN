import React from "react";
import NoteContext from "./NoteContext";

const NotesState = (props) => {
  const stateVal = {
    name: "Mateen Mirani",
    job: "MERN Developer",
  };

  return (
    <>
      <NoteContext.Provider value={stateVal}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
};

export default NotesState;
