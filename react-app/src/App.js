import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState("light");

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <NavBar navbarTheme={theme} onThemeChange={toggleTheme} />
        <Footer footerTheme={theme}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
