import React from "react";


import './Banner.css';

import diamond from '../../assets/images/banner/diamond.png'



function Banner() {


  return (
    <section className="banner">
      <div className="banner__column banner__column_type_first">
        <h2 className="banner__title">Own diamonds like never before!</h2>
        <div className="banner__button">
          <p className="banner__button-text">Buy coin</p>
        </div>
      </div>
      <div className="banner__column banner__column_type_second">
        <p className="banner__links-title">Trade BDR here</p>
        <div className="banner__links">
          <a className="banner__link" target="_blank" rel="noreferrer" href="/#">
            <p className="banner__link-text">Binance</p>
            <svg className="banner__link-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 3H21M21 3V9M21 3L10.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a className="banner__link" target="_blank" rel="noreferrer" href="/#">
            <p className="banner__link-text">Huobi</p>
            <svg className="banner__link-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 3H21M21 3V9M21 3L10.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a className="banner__link" target="_blank" rel="noreferrer" href="/#">
            <p className="banner__link-text">Kucoin</p>
            <svg className="banner__link-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 3H21M21 3V9M21 3L10.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <img className="banner__diamond" src={diamond} alt="diamond" />
    </section>
  );
}

export default Banner;
