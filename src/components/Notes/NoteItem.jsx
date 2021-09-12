import React from "react";

const NoteItem = (props) => {
  const { notesData } = props;
  return (
    <>
      <div className="col-lg-4">
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title">{notesData.title}</h5>
            <p class="card-text">{notesData.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
