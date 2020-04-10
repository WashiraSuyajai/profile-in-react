import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "../components/home";
import About from "../components/about";
import Footer from "../components/footer";
import Blogs from "../components/blogs";
import Profile from "../components/profile";
import Certificates from "../components/certificates";
import Contact from "../components/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends Component {
  state = {
    isOpen: null,
    title: "",
    href: "",
  };
  title = ["home", "about", "profile", "certificates"];
  href = ["/home", "/about", "/profile", "/certificates"];
  onChange = (i) => {};
  handleClick = (event) => {
    event.preventDefault();
    const { title } = this.state.title;
    this.setState({ href: "/" + this.title });
  };
  render() {
    const { href } = this.state;
    return (
      <div>
        <Navbar bg="light" expand="lg" onToggle=''>
          <Navbar.Brand title="home" href="/home">
            POU
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                title=''
                href='/home'
              >
                Home
              </Nav.Link>
              <Nav.Link title="about" href="/about">
                About
              </Nav.Link>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item title="profile" href="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item title="certificates" href="/certificates">
                  Certificates
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/home" component={Home} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/certificates" component={Certificates} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default NavBar;

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
}

*/
