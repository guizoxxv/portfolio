import React from 'react';
import Header from '../header/Header';
import '../../assets/styles/app.scss';
import SocialLinks from '../social-links/SocialLinks';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SocialLinks />
    </div>
  );
}

export default App;
