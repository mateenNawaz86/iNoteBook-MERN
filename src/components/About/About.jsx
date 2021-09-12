import React, { useContext } from "react";
import NoteContext from "../../context/notes/NoteContext";

const About = () => {
  const values = useContext(NoteContext);
  return (
    <>
      <h1>
        Hello, from {values.name}! I'm doing my job as a {values.job}
      </h1>
    </>
  );
};

export default About;
