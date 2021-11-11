import React from "react";
import Banner from "../Banner/Banner";
import Gia from "./Gia/Gia";
import Graph from "./Graph/Graph";
import HowItWorks from "./HowItWorks/HowItWorks";


import './Main.css';
import Overview from "./Overview/Overview";
import UseCases from "./UseCases/UseCases";



function Main() {


  return (
    <div className="main">
      <Overview />
      <Banner />
      <Graph />
      <Gia />
      <HowItWorks />
      <UseCases />
    </div>
  );
}

export default Main;
