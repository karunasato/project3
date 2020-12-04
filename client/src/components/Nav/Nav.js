import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import AUTH from "../../utils/AUTH";
import "./Nav.css";
import { Nav, Navbar, NavbarToggler, Collapse, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, NavbarBrand, DropdownItem} from 'reactstrap';
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
  // const [collapsed, setCollapsed] = useState(true);
  // const toggleNavbar = () => setCollapsed(!collapsed);
  if (props.user === null || props.user === undefined) {
    greeting = <p id="hello">Hello guest</p>;
  } else if (props.user) {
    greeting = (
      <Fragment>
        Welcome, <strong>{props.user}</strong><br></br>
       
      </Fragment>
    );
  } else if (props.user.username || props.user === undefined) {
    greeting = (
      <Fragment>
        Welcome back, <strong>{props.user.username} </strong><br></br>
      
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
          <img src="http://1.bp.blogspot.com/-qnIxcGQGUoc/VXN3Jr21hzI/AAAAAAAAWz8/pAE-zXOVKyA/s1600/Mood-Swing.png" alt="logo"></img>
        </NavbarBrand>

        {/* <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar> */}
          <Nav className="ml-auto p-2" navbar>
           

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <div style={{ textTransform: 'uppercase', color: "#354959" }}>{greeting}</div>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <div>{userStatus}</div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        {/* </Collapse> */}
      </Navbar>
    </header>
  );
};
export default Navbarcomponent;