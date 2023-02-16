import "./App.css";
import LandingPage from "./Pages/LandingPage.js";
import { useState } from "react";
import { HashRouter } from "react-router-dom";
import { CounterContext } from "./ContextState/CounterContext";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Gallery from "./assets/gallery";
import counterone from "./assets/counter";
import Header from "./components/Header";
import projects from "./data/projects";
// CSS
import "./styles/app.css";
import "/styles/Global.css";
import "/styles/overides.css";
import StyledComponent from "./components/styledComponent/styledcomponent";
// Components

import StateBool from "./components/stateBool";
import StateCollapseMenu from "./components/stateCollapseMenu";
import StateCounter from "./components/StateCounter";

import data from "./data";
import { useEffect } from "react";
import Getpokemons from "./components/GetPokemons";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import LandingPage from "../my-app/src/Assets/LandingPage";
import AboutPage from "../my-app/src/Assets/aboutPage";






 

function App() {
  return(
    <Router>
      <nav>
        <ul>
          <a href="/">Home</a>
          <link to="/">home</link>
          <link to="/about">About</link>
        </ul>
      </nav>
      <Routes>
        <Route path="/">
          <Route path="" element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </Router>
  );
}



  return (
    <div className="App">
      <Header Title="This is the title" subTitle="this is another prop" />

      <Main>
        <p>some text here</p>
        <p>some text here</p>
        <StyledComponent />

      </Main>

      
      <footer className="footer">
        <h1> Footer </h1>
      </footer>
    </div>
  );
}

export default App