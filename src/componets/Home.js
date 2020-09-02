import React from "react";

import PopularCourses from "./PopularCourses";
import Contact from "./contact";
import Start from "./start";
import Gallary from "./Gallary";
import Showcase from "./Showcase";
import Parallax from "./parallax";
import Links from "./Links";
import Footer from "./Footer";

function Home() {
  return (
    <div className="App">
      <Showcase />

      <Parallax />
      <br />
      <PopularCourses />
      <br />
      <Contact />
      <Start />
      <Gallary />
      <br />
      <Links />

      <Footer />
    </div>
  );
}

export default Home;
