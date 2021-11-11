import React from "react";



import './Graph.css';



function Graph() {


  return (
    <section className="graph">
      <h2 className="graph__title">BDR brings liquidity<br />in the diamond market<br />in a form of a stable coin</h2>
      <p className="graph__subtitle">Diamond market share of lab-grown diamonds worldwide from 2016 to 2021</p>
      <div className="graph__histogram">
        <div className="graph__histogram-first-row">
          <div className="graph__histogram-first-row-item">
            <p className="graph__histogram-first-row-item-text">6%</p>
          </div>
          <div className="graph__histogram-first-row-item">
            <p className="graph__histogram-first-row-item-text">4%</p>
          </div>
          <div className="graph__histogram-first-row-item">
            <p className="graph__histogram-first-row-item-text">2%</p>
          </div>
          <div className="graph__histogram-first-row-item">
            <p className="graph__histogram-first-row-item-text">0%</p>
          </div>
        </div>
        <div className="graph__histogram-second-row">
          <div className="graph__histogram-second-row-lines"></div>
          <div className="graph__histogram-second-row-lines"></div>
          <div className="graph__histogram-second-row-lines"></div>
          <div className="graph__histogram-second-row-lines graph__histogram-second-row-lines_noneborder"></div>
          <div className="graph__histogram-bar-container graph__histogram-bar-container_1">
            <p className="graph__histogram-bar-text">+1.7%</p>
            <div className="graph__histogram-bar"></div>
          </div>
          <div className="graph__histogram-bar-container graph__histogram-bar-container_2">
            <p className="graph__histogram-bar-text">+1.8%</p>
            <div className="graph__histogram-bar"></div>
          </div>
          <div className="graph__histogram-bar-container graph__histogram-bar-container_3">
            <p className="graph__histogram-bar-text">+2%</p>
            <div className="graph__histogram-bar"></div>
          </div>
          <div className="graph__histogram-bar-container graph__histogram-bar-container_4">
            <p className="graph__histogram-bar-text">+2.3%</p>
            <div className="graph__histogram-bar"></div>
          </div>
          <div className="graph__histogram-bar-container graph__histogram-bar-container_5">
            <p className="graph__histogram-bar-text">3%</p>
            <div className="graph__histogram-bar"></div>
          </div>
          <div className="graph__histogram-bar-container graph__histogram-bar-container_6">
            <p className="graph__histogram-bar-text">3.8%</p>
            <div className="graph__histogram-bar"></div>
          </div>
        </div>
      </div>
      <div className="graph__histogram-years">
        <div className="graph__histogram-years-plug"></div>
        <div className="graph__histogram-years-row">
          <div className="graph__histogram-year-container">
            <p className="graph__histogram-year-text">2016</p>
          </div>
          <div className="graph__histogram-year-container">
            <p className="graph__histogram-year-text">2017</p>
          </div>

          <div className="graph__histogram-year-container">
            <p className="graph__histogram-year-text">2018</p>
          </div>
          <div className="graph__histogram-year-container">
            <p className="graph__histogram-year-text">2019</p>
          </div>
          <div className="graph__histogram-year-container">
            <p className="graph__histogram-year-text">2020</p>
          </div>
          <div className="graph__histogram-year-container">
            <p className="graph__histogram-year-text">2021</p>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Graph;
