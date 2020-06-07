import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './assets/styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faGithub, faStackOverflow, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowLeft, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Project from './components/project/Project';

library.add(faLinkedinIn, faGithub, faEnvelope, faArrowLeft, faGlobe, faStackOverflow, faMedium);

const router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/projects/:projectSlug" exact={true} component={Project} />
    </Switch>
  </ BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));