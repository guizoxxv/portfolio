import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './assets/styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Project from './components/project/Project';

library.add(faLinkedinIn, faGithub, faEnvelope, faArrowLeft);

const router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/projects/:projectSlug" exact={true} component={Project} />
    </Switch>
  </ BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));