import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotesState from "./context/notes/NotesState";
import Alert from "./components/Alert/Alert";
import Login from "./components/Login/Login";
import Singup from "./components/Login/Singup";

const App = () => {
  return (
    <>
      <NotesState>
        <Router>
          <Navbar />
          <Alert />
          <div className="container my-3">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Singup /> 
              </Route>
            </Switch>
          </div>
        </Router>
      </NotesState>
    </>
  );
};

export default App;
