import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import Profile from "./components/profile";
import Certificates from "./components/certificates";
import Contact from "./components/contact";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    const { href } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
