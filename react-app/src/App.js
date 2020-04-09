import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import Profile from "./components/profile";
import Certificates from "./components/certificates";
import Contact from "./components/contact";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div>
        <div className="App container-fluid">
          {/* Navbar all icons */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              {/* 1. web icon */}
              <a className="navbar-brand" href="/">
                Washira
              </a>
              {/* 2. This is menu */}
              {/* 2.1 Nornal menu */}
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
                    {/* 2.2 This is drop down menu */}
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
                    {/* 3. This si disable menu */}
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
          {/* Navbar all icons ended */}
          {/*Thanks:
        https://stackoverflow.com/questions/50980046/bootstrap-dropdown-not-working-in-react/54188034 */}

          {/* Route */}
          <Route path="/blogs" component={Blogs} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/certificates" component={Certificates} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
