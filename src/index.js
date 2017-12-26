import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './components/router/Router.js';
import './assets/stylesheets/normalize.css';
import './assets/stylesheets/skeleton.css';
import './assets/stylesheets/main.styl';


ReactDOM.render(
  <Router />,
  document.getElementById('root')
);