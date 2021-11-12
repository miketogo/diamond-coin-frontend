import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {

  return (
    <div className="not-found">
      <MetaTags>
        <title>Page not found</title>
      </MetaTags>
      <h3 className={`not-found__title `}>
        404
      </h3>
      <p className={`not-found__text `}>
        Page not found
      </p>
      <Link className="not-found__link-to-main" to="/">Back</Link>
    </div>
  )
}

export default PageNotFound;
