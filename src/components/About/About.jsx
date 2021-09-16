import React from "react";

const About = (props) => {
  const styleObj = {
    backgroundColor: props.changeColor === "light" ? "white" : "#212529",
    color: props.changeColor === "light" ? "black" : "white",
  };

  return (
    <>
      <h1 className="text-center text-primary mt-3">About App</h1>
      <div className="accordion my-5" id="accordionExample">
        <div className="accordion-item" style={styleObj}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={styleObj}
            >
              <strong>Save you notes</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>MyNotes</strong> app is very secure you can feel free to
              use it for save your important notes in this web app. I hope you
              enjoy this web app.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={styleObj}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={styleObj}
            >
              <strong>Easy to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This web app is easy to use, you can use it as a normal web
              application with <strong>credentials</strong>. You can easily add
              new notes in your note list, you can update it when ever you want.
              You can delete your existing note easily just with one click.
              Updates and delete process is automatically update your notes in{" "}
              <strong>database</strong> also.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={styleObj}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={styleObj}
            >
              <strong>Browser Compitebilty</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse py-2"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This web app <strong>MyNotes</strong> provides you compatibility
              for different browsers. It also gives you{" "}
              <strong>mobile-first</strong> approach flexibility. It is also
              responsible for all devices using <strong>Bootstrap v5</strong>.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={styleObj}>
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={styleObj}
            >
              <strong>Creation</strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse py-2"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This beautiful web application is created by
              <strong> Mateen Mirani</strong>. It contains four technologies
              like <strong>MongoDB</strong> for database,
              <strong>ExpressJS</strong> for web application framework,
              <strong>ReactJS</strong> for front-end development, and
              <strong>NodeJS</strong> for the server-side process. MyNotes web
              app works smoothly
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
