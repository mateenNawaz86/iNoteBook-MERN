import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const host = "http://localhost:5000";

  const [login, setLogin] = useState({ email: "", password: "" });

  const history = useHistory();

  // function for getting input values
  const inpChangeHandler = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    let url = `${host}/api/authent/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: login.email, password: login.password }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success) {
        // save the authenticate token
        localStorage.setItem('token', json.authentToken);
        history.push('/');
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center text-primary">Login</h1>
        <form onSubmit={loginHandler}>
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
              value={login.email}
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
              autoComplete="off"
              name="password"
              onChange={inpChangeHandler}
              value={login.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
