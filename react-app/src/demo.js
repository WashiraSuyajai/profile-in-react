import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";
import Project from "./components/pages/project";
import About from "./components/pages/about";
import Profile from "./components/pages/profile";
import Footer from "./components/footer";

class Demo extends Component {
  render() {
    return (
      <div className="App">
        <nav
          className="navbar is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img
                  src="https://devahoy.com/assets/images/devahoy-text-logo.png"
                  alt="DEVAHOY LOGO"
                  width="112"
                  height="28"
                />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink
                  exact
                  to="/"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/projects"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/project"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  About
                </NavLink>
                <NavLink
                  to="/profile"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Profile
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <Footer/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/project" component={Project} />
        </Switch>
      </div>
    );
  }
}

export default Demo;
