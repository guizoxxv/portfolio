import React from 'react';
import Header from '../header/Header';
import '../../assets/styles/app.scss';
import SocialLinksWrapper from '../social-links-wrapper/SocialLinksWrapper';
import ProjectsWrapper from '../projects-wrapper/ProjectsWrapper';
import PublicationsWrapper from '../publications-wrapper/PublicationsWrapper';

const App = () => {
  return (
    <div className="appWrapper">
      <Header />
      <SocialLinksWrapper />
      <PublicationsWrapper />
      <ProjectsWrapper />
    </div>
  );
}

export default App;
