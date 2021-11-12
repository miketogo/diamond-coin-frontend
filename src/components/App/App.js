import React, { useEffect, useState, Suspense } from "react";


import { withRouter, Switch, Route } from "react-router-dom";
import './App.css';

import MenuPopup from '../MenuPopup/MenuPopup';
import Header from '../Header/Header';
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import PageNotFound from "../PageNotFound/PageNotFound";

const Main = React.lazy(() => import('../Main/Main'));
const DiamondProduction = React.lazy(() => import('../DiamondProduction/DiamondProduction'));
const Technology = React.lazy(() => import('../Technology/Technology'));
const About = React.lazy(() => import('../About/About'));


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
          <Suspense fallback={<Preloader />}>
            <Main />
          </Suspense>
        </Route>
        <Route path="/diamond-production">
          <Suspense fallback={<Preloader />}>
            <DiamondProduction />
          </Suspense>
        </Route>
        <Route path="/technology">
          <Suspense fallback={<Preloader />}>
            <Technology />
          </Suspense>
        </Route>
        <Route path="/about">
          <Suspense fallback={<Preloader />}>
            <About />
          </Suspense>
        </Route>
        <Route path="*">
          <Suspense fallback={<Preloader />}>
            <PageNotFound />
          </Suspense>
        </Route>
      </Switch>
      <Subscribe />
      <Footer links={links} />
    </div>
  );
})

