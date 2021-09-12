import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotesState from "./context/notes/NotesState";
import Alert from "./components/Alert/Alert";

const App = () => {
  return (
    <>
      <NotesState>
        <Router>
          <Navbar />
          <Alert />
          <div className="container my-5">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NotesState>
    </>
  );
};

export default App;
