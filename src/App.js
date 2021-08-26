import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Downloads from "./components/Downloads";
import Careers from "./components/Careers";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="NavBar" />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Projects} path="/projects" />
          <Route component={Team} path="/team" />
          <Route component={Downloads} path="/downloads" />
          <Route component={Careers} path="/careers" />
          <Route component={Shop} path="/shop" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
