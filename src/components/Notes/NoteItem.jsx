import React from "react";

const NoteItem = (props) => {
  const { notesData } = props;
  return (
    <>
      <div className="col-lg-4">
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{notesData.title}</h5>
              <div className="icons">
                <i className="far fa-trash-alt mx-1" />
                <i className="far fa-edit mx-1" />
              </div>
            </div>
            <p className="card-text">{notesData.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
