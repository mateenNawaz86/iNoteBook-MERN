import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Singup = (props) => {
  const host = "http://localhost:5000";

  const [enteredInp, setEnteredInp] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const history = useHistory();

  // function for getting input values
  const inpChangeHandler = (event) => {
    setEnteredInp({
      ...enteredInp,
      [event.target.name]: event.target.value,
    });
  };

  // function for form submit handler
  const signUpHandler = async (event) => {
    event.preventDefault();
    let url = `${host}/api/authent/createUser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: enteredInp.name,
        email: enteredInp.email,
        password: enteredInp.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the authenticate token
      localStorage.setItem("token", json.authentToken);
      history.push("/");
      props.showAlert("Account created Successfully!", "success");
    } else {
      props.showAlert("Invalid Inputs!", "warning");
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center text-primary">Sign Up</h1>
        <form onSubmit={signUpHandler}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              autoComplete="off"
              onChange={inpChangeHandler}
              value={enteredInp.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              autoComplete="off"
              onChange={inpChangeHandler}
              value={enteredInp.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              autoComplete="off"
              onChange={inpChangeHandler}
              value={enteredInp.password}
              required
              minLength={6}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confPassword"
              name="confPassword"
              autoComplete="off"
              onChange={inpChangeHandler}
              value={enteredInp.confPassword}
              required
              minLength={6}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sing Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Singup;
