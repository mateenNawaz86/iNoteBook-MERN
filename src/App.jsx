import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotesState from "./context/notes/NotesState";
import Alert from "./components/Alert/Alert";
import Login from "./components/Login/Login";
import Singup from "./components/Login/Singup";

const App = () => {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const [changeIcon, setChangeIcon] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleHandler = () => {
    setChangeIcon(!changeIcon);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <NotesState>
        <Router>
          <Navbar changeColor={mode}/>
          <Alert alert={alert} />
          <div className="icon">
            <i
              onClick={toggleHandler}
              style={{
                color: mode === "dark" ? "white" : "black",
              }}
              className={changeIcon ? "far fa-sun" : "far fa-moon"}
            />
          </div>
          <div className="container my-3">
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert} changeColor={mode} />
              </Route>
              <Route exact path="/about">
                <About changeColor={mode} changeColor={mode} />
              </Route>
              <Route exact path="/login">
                <Login showAlert={showAlert} changeColor={mode} />
              </Route>
              <Route exact path="/signup">
                <Singup showAlert={showAlert} changeColor={mode} />
              </Route>
            </Switch>
          </div>
        </Router>
      </NotesState>
    </>
  );
};

export default App;
