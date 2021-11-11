import React from "react";



import './Graph.css';



function Graph() {


  return (
    <section className="graph-prod">
      <h2 className="graph-prod__title">Diamond reserves</h2>
      <p className="graph-prod__subtitle">BDR reserves grow every month by 6 carats per machine in production. We produce diamonds and add new production equipment to increase volumes</p>
      <div className="graph-prod__histogram">
        <div className="graph-prod__histogram-first-row">
          <div className="graph-prod__histogram-first-row-item">
            <p className="graph-prod__histogram-first-row-item-text">2 BARS</p>
          </div>
          <div className="graph-prod__histogram-first-row-item">
            <p className="graph-prod__histogram-first-row-item-text">1 BARS</p>
          </div>
          <div className="graph-prod__histogram-first-row-item">
            <p className="graph-prod__histogram-first-row-item-text">1 BARS</p>
          </div>
          <div className="graph-prod__histogram-first-row-item">
            <p className="graph-prod__histogram-first-row-item-text">1 BARS</p>
          </div>
          <div className="graph-prod__histogram-first-row-item">
            <p className="graph-prod__histogram-first-row-item-text">1 BARS</p>
          </div>
        </div>
        <div className="graph-prod__histogram-second-row">
          <div className="graph-prod__histogram-second-row-lines"></div>
          <div className="graph-prod__histogram-second-row-lines"></div>
          <div className="graph-prod__histogram-second-row-lines"></div>
          <div className="graph-prod__histogram-second-row-lines"></div>
          <div className="graph-prod__histogram-second-row-lines graph-prod__histogram-second-row-lines_noneborder"></div>
          <div className="graph-prod__histogram-bar-container graph-prod__histogram-bar-container_1">
            <p className="graph-prod__histogram-bar-text">+800 carats</p>
            <div className="graph-prod__histogram-bar"></div>
          </div>
          <div className="graph-prod__histogram-bar-container graph-prod__histogram-bar-container_2">
            <p className="graph-prod__histogram-bar-text">+800 carats</p>
            <div className="graph-prod__histogram-bar"></div>
          </div>
          <div className="graph-prod__histogram-bar-container graph-prod__histogram-bar-container_3">
            <p className="graph-prod__histogram-bar-text">+800 carats</p>
            <div className="graph-prod__histogram-bar"></div>
          </div>
          <div className="graph-prod__histogram-bar-container graph-prod__histogram-bar-container_4">
            <p className="graph-prod__histogram-bar-text">+800 carats</p>
            <div className="graph-prod__histogram-bar"></div>
          </div>
        </div>
      </div>
      <div className="graph-prod__histogram-years">
        <div className="graph-prod__histogram-years-plug"></div>
        <div className="graph-prod__histogram-years-row">
          <div className="graph-prod__histogram-year-container">
            <p className="graph-prod__histogram-year-text">Nov. 2021</p>
          </div>
          <div className="graph-prod__histogram-year-container">
            <p className="graph-prod__histogram-year-text">Dec. 2021</p>
          </div>

          <div className="graph-prod__histogram-year-container">
            <p className="graph-prod__histogram-year-text">Jan. 2022</p>
          </div>
          <div className="graph-prod__histogram-year-container">
            <p className="graph-prod__histogram-year-text">Feb. 2022</p>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Graph;
