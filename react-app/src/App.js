import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <NavBar />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
