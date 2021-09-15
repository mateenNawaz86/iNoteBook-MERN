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
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Text <strong>transcription</strong> provides you a friendly way to
              analyze your text as you want.
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
              Text <strong>transcription</strong> provides you quick, free
              characters and words tools. You are <strong>eligible</strong> to
              use it instantly for the text of your long document. This
              application adds more relaxation to your life.
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
              Text <strong>transcription</strong> provides you compatibility for
              different browsers. It also gives you{" "}
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
              This beautiful application is created with the most famous{" "}
              <strong>front-end library ReactJS</strong>. Text transcription
              application is all about ReactJS basic features like{" "}
              <strong>hooks, router, and built-in events functions</strong>.
              Application styled with <strong>Bootstrap v5</strong>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
