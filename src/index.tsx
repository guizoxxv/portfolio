import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './assets/styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Project from './components/project/Project';
import MatchProps from './components/project/interfaces/matchProps.interface';

library.add(faEnvelope, faLinkedinIn, faGithub);

const router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/projects/:projectSlug" exact={true} render={({ match }: MatchProps) => (
        <Project projectSlug={match.params.projectSlug} />
      )} />
    </Switch>
  </ BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));