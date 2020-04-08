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
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const menu = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="App">
        {/* Navbar all icons */}
        {/* 1. web icon */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Washira
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 2. This is menu */}
          {/* 2.1 Nornal menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blogs">
                  Blogs
                </a>
              </li>
              {/* 2.2 This is drop down menu */}
              <li className="nav-item dropdown" onClick={this.toggle}>
                <div>
                  <a
                    className="nav-link dropdown-toggle"
                    type="button"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About
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

              {/* 3. This si disable menu */}
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
            </ul>

            {/* 4. This is searcher */}
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
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
    );
  }
}

export default App;
