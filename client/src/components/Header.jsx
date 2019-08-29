import React from 'react';
import {Link} from 'react-router-dom';

export default ({content}) => (
  <Link to="/">
    <h1>{content}</h1>
  </Link>
);
