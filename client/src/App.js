// import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import WebcamModule from "./components/webcam"
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./pages/Auth/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import AUTH from "./utils/AUTH";
import NoMatch from "./pages/NoMatch";
import Navbarcomponent from "./components/Nav/Index";
// import Webcam from "react-webcam";


  function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    AUTH.getUser({
      username: "Alter Ego",
      password: "password2",
      email: "kory@gmail.com"
    }).then((response) => {
      if (!!response.data.user) {
        setLoggedIn(true);
        setUser(response.data.user);
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    });

    return () => {
      setLoggedIn(false);
      setUser(null);
    };
  }, []);

  const logout = (event) => {
    event.preventDefault();

    AUTH.logout().then((response) => {
      if (response.status === 200) {
        setLoggedIn(false);
        setUser(null);
      }
    });
  };

  const login = (username, password) => {
    AUTH.login(username, password).then((response) => {
      if (response.status === 200) {
        // update the state
        setLoggedIn(true);
        setUser(response.data.user);
      }
    });
  };

  const register = (username, password, email) => {
    AUTH.signup({
      username: username,
      password: password,
      email: email
    }).then((response) => {
      console.log(response.status)
      if (response.status === 200) {
        // update the state
        setLoggedIn(true);
        setUser(response.data.user);
      }
    });
  };


  return (
    <div className="App">
      {loggedIn && (
        <div>
          <Navbarcomponent user={user} logout={logout} />
          {/* <div className="main-view"> */}
          <Switch>
            <Route exact path="/" component={WebcamModule} />
            {/* <Route exact path="/user/:id" component={UserPage} /> */}
            <Route component={NoMatch} />
          </Switch>
          {/* </div> */}
        </div>
      )}
      {!loggedIn && (
        <div className="auth-wrapper">
          <Navbarcomponent user={user} logout={logout} />
          <Switch>
            <Route 
            exact path="/" 
            component={() => <LoginForm login={login} register = {register} />} 
            />
            <Route
              exact path="/login"
              component={() => <LoginForm login={login} register = {register} />}
            />
            <Route
              exact path="/register"
              component={() => <LoginForm login={login} register = {register} />}
            />
            {/* <Route exact path="/signup" component={SignupForm} /> */}
          </Switch>
        </div>
      )}
        
        <p>How are you feeling today? Thumbs up or Thumbs down?</p>
        <WebcamModule />
      </div>
    );
  
    };

  


export default App;
