import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => setShowMenu(!showMenu);

  // useLocation hook for changing active class
  let location = useLocation();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top shadow navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MyNotes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              onClick={showMenuHandler}
              className={showMenu ? "fas fa-times" : "fas fa-bars"}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link
                  to="/login"
                  className="btn btn-primary mx-1"
                  type="submit"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-success mx-1"
                  type="submit"
                >
                  Sign Up
                </Link>
              </form>
            ) : (
              <button onClick={logoutHandler} className="btn btn-primary mx-1">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
