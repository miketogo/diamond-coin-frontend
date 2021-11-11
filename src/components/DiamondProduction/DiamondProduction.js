import React from "react";
import Banner from "../Banner/Banner";
import Bars from "./Bars/Bars";

import './DiamondProduction.css';
import Graph from "./Graph/Graph";
import Production from "./Production/Production";



function DiamondProduction() {


  return (
    <div className="diamond-production">
      <Production />
      <Bars />
      <Graph />
      <Banner />
    </div>
  );
}

export default DiamondProduction;
