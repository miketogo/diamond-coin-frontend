import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './MenuPopup.css'



function MenuPopup(props) {
  return (
    <div className={`menu-popup ${props.isMenuPopupOpen ? 'menu-popup_active' : ''}`}>
      <div className={`menu-popup__container ${props.isMenuPopupOpen ? 'menu-popup__container_active' : ''}`}>
        <div className="menu-popup__close" onClick={props.handleMenuCloseClick}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40.0241" height="2.0012" rx="1.0006" transform="matrix(0.703926 0.710273 -0.703926 0.710273 2.40869 1.15088)" fill="#121212" />
            <rect width="40.0241" height="2.0012" rx="1.0006" transform="matrix(0.703926 -0.710273 0.703926 0.710273 1.41724 29.4282)" fill="#121212" />
          </svg>

        </div>
        <Link to="/" className="menu-popup__logo" onClick={props.handleMenuCloseClick}>
          <svg className="menu-popup__logo-icon" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.5 22.5C44.5 34.6503 34.6503 44.5 22.5 44.5C10.3497 44.5 0.5 34.6503 0.5 22.5C0.5 10.3497 10.3497 0.5 22.5 0.5C34.6503 0.5 44.5 10.3497 44.5 22.5Z" stroke="#855CF8" />
            <path d="M17.3719 9.52586L22.6693 1L28.215 9.53175M17.3719 9.52586L7.09449 7.48413L10.0218 17.0984L9.98661 17.1208M17.3719 9.52586L22.6693 22.5M17.3719 9.52586L14.3448 2.11207M28.215 9.53175L37.6983 7.30172L35.2768 17.4148M28.215 9.53175L22.6693 22.5M28.215 9.53175L31.1339 2.70635M35.2768 17.4148L44 22.5L35.1969 27.619L35.2022 27.6386M35.2768 17.4148L22.6693 22.5M35.2768 17.4148L42.8879 14.3448M35.2022 27.6386L37.9055 37.5159L27.9776 35.127M35.2022 27.6386L22.6693 22.5M35.2022 27.6386L42.6457 30.6905M27.9776 35.127L23.0079 44L17.6112 35.2457M27.9776 35.127L22.6693 22.5M27.9776 35.127L31.1339 42.6349M17.6112 35.2457L7.77165 37.8571L10.0218 27.9016L9.9981 27.8883M17.6112 35.2457L22.6693 22.5M17.6112 35.2457L14.5433 42.9762M9.9981 27.8883L1 22.8413L9.98661 17.1208M9.9981 27.8883L22.6693 22.5M9.9981 27.8883L2.21564 31.1977M9.98661 17.1208L2.30883 13.8644M9.98661 17.1208L22.6693 22.5" stroke="#855CF8" />
          </svg>
          <p className="menu-popup__logo-text">BDR</p>

        </Link>
        <nav className="menu-popup__link-container">
          {props.links.map((item, i) => (
            <div className="menu-popup__link" key={`menu-popup__link${i}`}>
              <div className={`menu-popup__link-square ${props.currentPath === item.link ? 'menu-popup__link-square_active' : ''}`}></div>
              {item.link === "/" ?
                <NavLink exact to={item.link} className="menu-popup__link-text" activeClassName='menu-popup__link-text_active' onClick={props.handleMenuCloseClick}>{item.text}</NavLink>
                :
                <NavLink to={item.link} className="menu-popup__link-text" activeClassName='menu-popup__link-text_active' onClick={props.handleMenuCloseClick}>{item.text}</NavLink>
              }


            </div>
          ))}
        </nav>
        <div className="menu-popup__buy">
          <p className="menu-popup__buy-text">Buy coin</p>

        </div>
        <div className="menu-popup__socials">
          <a target="_blank" rel="noreferrer" href="/#" className="menu-popup__social-link">
            <svg className="menu-popup__social-icon" width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="menu-popup__social-icon-path" d="M28.0263 1.7998L29.0242 1.73365C28.9976 1.33251 28.7333 0.986293 28.3534 0.854804C27.9735 0.723315 27.5518 0.832119 27.2829 1.131L28.0263 1.7998ZM27.1626 7.32309C27.1626 6.77081 26.7148 6.32309 26.1626 6.32309C25.6103 6.32309 25.1626 6.77081 25.1626 7.32309H27.1626ZM14.9798 7.47652H13.9798V7.47652L14.9798 7.47652ZM14.9798 9.26647L15.9798 9.26647V9.26647L14.9798 9.26647ZM1.93335 22.3331V21.3331C1.49281 21.3331 1.10417 21.6214 0.976361 22.043C0.84855 22.4646 1.01168 22.9202 1.37806 23.1648L1.93335 22.3331ZM3.79714 1.7998L4.73364 1.44916C4.59411 1.07648 4.24689 0.822012 3.8495 0.801176C3.4521 0.780341 3.08018 0.997107 2.90243 1.35314L3.79714 1.7998ZM11.2523 18.5998L11.9599 19.3064C12.2047 19.0613 12.3051 18.707 12.2255 18.3699C12.1459 18.0328 11.8975 17.7609 11.5689 17.6513L11.2523 18.5998ZM24.7367 3.61678L23.9949 4.28747L24.3552 4.68595L24.8864 4.60551L24.7367 3.61678ZM27.0285 1.86596C27.1246 3.3145 27.0349 4.18533 26.8041 4.83615C26.5806 5.46607 26.1902 5.9883 25.4707 6.67778L26.8544 8.12183C27.675 7.33551 28.3159 6.55653 28.689 5.50481C29.0547 4.47398 29.1269 3.2827 29.0242 1.73365L27.0285 1.86596ZM27.1626 8.68312V7.32309H25.1626V8.68312H27.1626ZM13.9798 7.47652L13.9798 9.26647L15.9798 9.26647L15.9798 7.47652L13.9798 7.47652ZM13.9798 9.26647L13.9798 10.1998L15.9798 10.1998L15.9798 9.26647L13.9798 9.26647ZM20.6478 0.799805C16.9637 0.799805 13.9798 3.79053 13.9798 7.47652H15.9798C15.9798 4.89218 18.0712 2.7998 20.6478 2.7998V0.799805ZM25.1626 8.68312C25.1626 16.7019 18.6725 23.1998 10.6698 23.1998V25.1998C19.78 25.1998 27.1626 17.8036 27.1626 8.68312H25.1626ZM2.86063 2.15045C3.88081 4.87515 7.70924 10.2665 14.9798 10.2665V8.26647C8.8312 8.26647 5.57725 3.70224 4.73364 1.44916L2.86063 2.15045ZM2.90243 1.35314C0.942108 5.27985 0.636198 9.09703 2.06618 12.352C3.4927 15.5991 6.5592 18.0873 10.9356 19.5483L11.5689 17.6513C7.55832 16.3123 5.03346 14.1338 3.89727 11.5476C2.76455 8.96925 2.92459 5.78642 4.69184 2.24647L2.90243 1.35314ZM10.5446 17.8932C9.42915 19.0105 6.06604 21.3331 1.93335 21.3331V23.3331C6.74683 23.3331 10.5904 20.678 11.9599 19.3064L10.5446 17.8932ZM25.4784 2.9461C24.2879 1.62951 22.5641 0.799805 20.6478 0.799805V2.7998C21.9748 2.7998 23.1673 3.37212 23.9949 4.28747L25.4784 2.9461ZM24.8864 4.60551C26.3219 4.3881 27.7208 3.63467 28.7698 2.46861L27.2829 1.131C26.5315 1.96627 25.5468 2.48268 24.5869 2.62806L24.8864 4.60551ZM1.37806 23.1648C4.45974 25.2224 7.69118 25.1998 10.6698 25.1998V23.1998C7.62509 23.1998 4.99832 23.1772 2.48864 21.5015L1.37806 23.1648Z" />
            </svg>
          </a>
          <a target="_blank" rel="noreferrer" href="/#" className="menu-popup__social-link">
            <svg className="menu-popup__social-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="menu-popup__social-icon-stroke" d="M15 28.0664C7.7835 28.0664 1.93335 22.2163 1.93335 14.9998C1.93335 7.78325 7.7835 1.93311 15 1.93311C22.2165 1.93311 28.0667 7.78325 28.0667 14.9998C28.0667 22.2163 22.2165 28.0664 15 28.0664ZM15 28.0664V13.1331C15 11.0712 16.6715 9.39977 18.7333 9.39977H19.6667M10.3333 16.8664H19.6667" stroke="#855CF8" strokeWidth="2" />
            </svg>
          </a>
          <a target="_blank" rel="noreferrer" href="/#" className="menu-popup__social-link">
            <svg className="menu-popup__social-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="menu-popup__social-icon-stroke" d="M9.40002 9.39977L15 16.8664L20.6 9.39977M9.40002 9.39977H6.60002M9.40002 9.39977V21.5331M20.6 9.39977H23.4M20.6 9.39977V21.5331M6.60002 20.5998H12.2M17.8 20.5998H23.4M3.80002 1.93311H26.2C27.2309 1.93311 28.0667 2.76884 28.0667 3.79977V26.1998C28.0667 27.2307 27.2309 28.0664 26.2 28.0664H3.80002C2.76909 28.0664 1.93335 27.2307 1.93335 26.1998V3.79977C1.93335 2.76884 2.76908 1.93311 3.80002 1.93311Z" stroke="#855CF8" strokeWidth="2" />
            </svg>
          </a>
        </div>
      </div>
      <div className={`menu-popup__background ${props.isMenuPopupOpen ? 'menu-popup__background_active' : ''}`} onClick={props.handleMenuCloseClick}>

      </div>
    </div>
  );
}

export default MenuPopup;
