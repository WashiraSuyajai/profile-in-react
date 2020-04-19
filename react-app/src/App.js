import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
