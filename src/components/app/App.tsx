import React from 'react';
import Header from '../header/Header';
import '../../assets/styles/app.scss';
import SocialLinksWrapper from '../social-links-wrapper/SocialLinksWrapper';
import ProjectsWrapper from '../projects-wrapper/ProjectsWrapper';

const App = () => {
  return (
    <div className="appWrapper">
      <Header />
      <SocialLinksWrapper />
      <ProjectsWrapper />
    </div>
  );
}

export default App;
