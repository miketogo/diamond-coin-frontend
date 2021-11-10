import React, { useEffect, useState } from "react";

import MenuPopup from '../MenuPopup/MenuPopup';
import Header from '../Header/Header';
import { withRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";


const links = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Diamond production',
    link: '/diamond-production'
  },
  {
    text: 'Technology',
    link: '/technology'
  },
  {
    text: 'Assurance',
    link: '/assurance'
  },
  {
    text: 'About',
    link: '/about'
  },
]


export default withRouter(function App({ location }) {

  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false);

  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const { pathname } = location;
    console.log("New path:", pathname);
    setCurrentPath(pathname);
  }, [location]);

  function handleMenuOpenClick() {
    setMenuPopupOpen(true)
  }
  function handleMenuCloseClick() {
    setMenuPopupOpen(false)
  }


  return (
    <div className="app">
      <MenuPopup isMenuPopupOpen={isMenuPopupOpen} handleMenuCloseClick={handleMenuCloseClick} links={links} currentPath={currentPath} />
      <Header currentPath={currentPath} handleMenuOpenClick={handleMenuOpenClick} links={links} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
})

