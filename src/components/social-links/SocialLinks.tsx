import React from 'react';
import socialLinksData from '../../data/socialLinks.json';
import SocialLink from '../social-link/SocialLink';
import SocialLinkDataInterface from '../social-link/socialLinkData.interface.js';

const SocialLinks: React.FC = () => {
  const { links } = socialLinksData;

  return (
    <section className="text-center">
      {links && links.map((link, index) => {
        return (
          <SocialLink key={index} link={link as SocialLinkDataInterface} />
        );
      })}
    </section>
  );
}

export default SocialLinks;
