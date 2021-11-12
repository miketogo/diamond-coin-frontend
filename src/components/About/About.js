import React from "react";
import Banner from "../Banner/Banner";

import './About.css';
import Heading from "./Heading/Heading";
import Team from "./Team/Team";




function About() {


  return (
    <div className="about">
      <Heading />
      <Team />
      <Banner />
    </div>
  );
}

export default About;
