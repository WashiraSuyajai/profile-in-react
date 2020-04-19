import React, { Component } from "react";
import { Route, Link, Switch, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/project";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Profile from "./pages/profile";
import Certificates from "./pages/certificates";
import Contact from "./pages/contact";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarOne = {
  marginLeft: "1vw",
  marginRight: "1vw",
  fontFamily: "Chivo",
  fontSize: "18px",
};

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" sticky="top">
          <div className="container">
            <Navbar.Brand href="/">POU</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link
                  as={Link}
                  to="/"
                  style={NavbarOne}
                  activeClassname="active"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/project"
                  style={NavbarOne}
                  activeClassname="chosen"
                >
                  Project
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/blogs"
                  style={NavbarOne}
                  activeClassname="chosen"
                >
                  Blogs
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  style={NavbarOne}
                  activeClassname="chosen"
                >
                  About
                </Nav.Link>
                <NavDropdown
                  title="More"
                  id="basic-nav-dropdown"
                  style={NavbarOne}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/profile"
                    activeClassname="active"
                  >
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/certificates"
                    activeClassname="active"
                  >
                    Certificates
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <Switch>
          <Route exact path={"/"} exact render={() => <Home />} />
          <Route exact path={"/blogs"} exact render={props => <Blogs />} />
          <Route exact path={"/about"} exact render={props => <About />} />
          <Route
            exact
            path={"/profile"}
            exact
            render={props => <Profile />}
          />
          <Route
            exact
            path={"/project"}
            exact
            render={props => <Project />}
          />
          <Route
            exact
            path={"/certificates"}
            exact
            render={props => <Certificates />}
          />
          <Route
            exact
            path={"/contact"}
            exact
            render={props => <Contact />}
          />
        </Switch>
      </div>
    );
  }
}

{
  /* <Switch>
  <Route exact path={"/"} component={Home} />
  <Route exact path={"/blogs"} component={Blogs} />
  <Route exact path={"/about"} component={About} />
  <Route exact path={"/profile"} component={Profile} />
  <Route exact path={"/project"} component={Project} />
  <Route exact path={"/certificates"} component={Certificates} />
  <Route exact path={"/contact"} component={Contact} />
</Switch>; */
}

// ReactDOM.render(
//   <BrowserRouter>
//     <NavBar />
//   </BrowserRouter>,
//   document.getElementById("navbar")
// );

/* Old navbar

class App extends Component {
 state = {
   isOpen: false,
   navbarButton: false,
 };
 toggle = () => this.setState({ isOpen: !this.state.isOpen });
 toggleNav = () => this.setState({ isOpen: !this.state.navbarButton });

 render() {
   const menu = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
   return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          
          <a className="navbar-brand" href="/">
            Washira
          </a>
          <div className="navbar">
            <ul className="navbar-nav mr-auto">
              <div className="row">
                <div className="col">
                  <li className="nav-item active">
                    <a className="nav-link text-uppercase" href="/about">
                      About <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </div>
                <div className="col">
                  <li className="nav-item">
                    <a className="nav-link text-uppercasse" href="/blogs">
                      Blogs
                    </a>
                  </li>
                </div>
                <div className="col">
                  <li className="nav-item dropdown" onClick={this.toggle}>
                    <div>
                      <a
                        className="nav-link dropdown-toggle text-uppercase"
                        type="button"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        My Story
                      </a>
                      <div
                        className={menu}
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="/profile">
                          Profile
                        </a>
                        <a className="dropdown-item" href="/certificates">
                          Certificates
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/contact">
                          Contact
                        </a>
                      </div>
                    </div>
                  </li>
                </div>
                <div className="col">
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Disabled
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    Thanks:
    https://stackoverflow.com/questions/50980046/bootstrap-dropdown-not-working-in-react/54188034 
   )
 }
}*/
