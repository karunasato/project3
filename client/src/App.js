import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import LoginForm from "./pages/Auth/LoginForm";
import SignupForm from "./pages/Auth/SignupForm";
import Nav from "./components/Nav/Index";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import AUTH from "./utils/AUTH";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction/index";
import { render } from "react-dom";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    AUTH.getUser().then((response) => {
      if (!!response.data.username) {
        setLoggedIn(true);
        setUser(response.data.username);
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
        setUser(response.data.username);
      }
    });
  };

  return (
    <Router>

      {/*if the user is loggin in use these routes */}
      {loggedIn && (
        <div>
          <Nav user={user} logout={logout} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/prediction" component={Prediction} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      )}

      {/* If no user is loggin in use these routes */}
      {!loggedIn && (
        <div className="auth-wrapper">
          <Nav user={user} logout={logout} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={() => <LoginForm login={login} />} />
            <Route exact path="/signup" component={SignupForm} />
          </Switch>
          <Footer />
        </div>
      )} 

    </Router>
  );
}

export default App;


// return (
//   <div className="App">
//     {loggedIn && (
//       <div>
//         <Nav user={user} logout={logout} />
//         {/* <div className="main-view"> */}
//         <Switch>
//           <Route exact path="/app" component={Home} />
//           <Route component={NoMatch} />
//         </Switch>
//         {/* </div> */}
//       </div>
//     )}
//     {!loggedIn && (
//       <div className="auth-wrapper">
//         <Nav user={user} logout={logout} />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/login" component={() => <LoginForm login={login} />} />
//           <Route exact path="/signup" component={SignupForm} />
//           <Route exact path="/prediction" component={Prediction} />
//         </Switch>
//       </div>
//     )}
//     <div>
//     </div>
//     <Footer />
//   </div>
// );