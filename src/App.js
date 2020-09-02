import React from "react";
//import logo from './logo.svg';
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//importing components
import Navigationbar from "./componets/Navigationbar";
import About from "./componets/About";
import PopularCourses from "./componets/PopularCourses";
import Gallary from "./componets/Gallary";

import Contact from "./componets/contact";
import Home from "./componets/Home";

function App(props) {
  return (
    <Router>
      <div>
        <Navigationbar />
      </div>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about-us" component={About} />
        <Route path="/popular-courses" component={PopularCourses} />

        <Route path="/our-gallary" component={Gallary} />
        <Route path="/contact-us" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
