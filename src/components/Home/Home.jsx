import React from "react";
import Notes from "../Notes/Notes";

const Home = (props) => {
  return (
    <>
      <Notes showAlert={props.showAlert} changeClr={props.changeColor}/>
    </>
  );
};

export default Home;
