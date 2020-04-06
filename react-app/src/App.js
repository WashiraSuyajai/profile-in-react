import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import Profile from "./components/profile";
import Certificates from "./components/certificates";

class App extends Component {
  state = {
    displayMenu: false,
  };

  toggle = () => this.setState({ displayMenu: !this.setState.displayMenu });
  render() {
    const menu = `dropdown-menu${this.setState.displayMenu ? "show" : ""}`;
    return (
      <div className="App">
        {/* Navbar */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            Washira
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blogs">
                  Blogs
                </a>
              </li>
              <li class="nav-item dropdown" onClick={this.toggle}>
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
                    <a class="dropdown-item" href="/profile">
                      Profile
                    </a>
                    <a class="dropdown-item" href="/certificates">
                      Certificates
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/works">
                      Something else here
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        {/*Special Thanks:
        https://stackoverflow.com/questions/50980046/bootstrap-dropdown-not-working-in-react/54188034 */}

        <Route path="/blogs" component={Blogs} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/certificates" component={Certificates} />
        <Footer />
      </div>
    );
  }
}

export default App;
