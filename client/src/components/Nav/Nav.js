import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import AUTH from "../../utils/AUTH";
import "./Nav.css";
import { Nav, Navbar, UncontrolledDropdown, DropdownToggle, DropdownMenu, NavbarBrand, DropdownItem} from 'reactstrap';
const Navbarcomponent = (props) => {
  let greeting;
  let userStatus;
  const [setUser] = useState();
  useEffect(() => {
    AUTH.getUser().then((response) => {
      if (!!response.data.user) {
        setUser(response.data.username._id);
      }
    })
  }, []);

  if (props.user === null || props.user === undefined) {
    greeting = (
      <Fragment>
        <strong style = {{fontSize:25 , color: "whitesmoke"}} id="hello">Hello Guest</strong>
      </Fragment>
    );
  
  } else if (props.user) {
    greeting = (
      <Fragment >
        <strong style = {{fontSize:25 , color: "whitesmoke"}}>Welcome, {props.user}</strong>
       
      </Fragment>
    );
  } else if (props.user.username || props.user === undefined) {
    greeting = (
      <Fragment>
        <strong style = {{fontSize:25 , color: "whitesmoke"}}> Welcome back, {props.user.username} </strong>
      
      </Fragment>
    );
  }
  if (props.user === null || props.user === undefined) {
    userStatus = (
      <Link to="/login" className="login myLinks" onClick={props.login}>
        Login
      </Link>
    );
  } else {
    userStatus = (
      <Link to="/" className="logout myLinks" onClick={props.logout}>
        Logout
      </Link>
    );
  }
  //  
  return (
    <header>
      <Navbar id="navbar-border" color="#5b9098" light expand="md">
        <NavbarBrand href="/" className="navbar-brand">
       
           <p id="mood"> Mood Swing</p>
          {/* <img src="http://1.bp.blogspot.com/-qnIxcGQGUoc/VXN3Jr21hzI/AAAAAAAAWz8/pAE-zXOVKyA/s1600/Mood-Swing.png" alt="logo"></img> */}
        </NavbarBrand>

       
          <Nav className="ml-auto p-2" navbar>
           

            <UncontrolledDropdown nav inNavbar>
              {greeting}
              <DropdownToggle style = {{color: "whitesmoke"}} nav caret>
                MENU
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <div>{userStatus}</div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
      </Navbar>
    </header>
  );
};
export default Navbarcomponent;