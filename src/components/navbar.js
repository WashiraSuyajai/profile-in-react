import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/project";
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

function NavBar({ navbarTheme, onThemeChange }) {
  return (
    <div>
      <Navbar
        bg={navbarTheme === "light" ? "light" : "secondary"}
        expand="lg"
        
        style={{ transition: "all 0.25s linear" }}
      >
        <div className="container">
          <Navbar.Brand href="/profile-in-react/">POU</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" style={NavbarOne}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/project" style={NavbarOne}>
                Project
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs" style={NavbarOne}>
                Blogs
              </Nav.Link>
              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                style={NavbarOne}
              >
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/certificates">
                  Certificates
                </NavDropdown.Item>
              </NavDropdown>
              <button onClick={onThemeChange}>Dark Mode</button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* Router Switch */}
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route
          exact
          path="/profile-in-react"
          render={() => <Redirect to="/home" />}
        />
        <Route exact path="/home" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/certificates" component={Certificates} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
export default NavBar;

/* Old navbar version

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
