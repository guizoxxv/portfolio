import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import SocialLinkDataInterface from './interfaces/socialLinkData.interface';
import styles from './SocialLink.module.scss';

interface SocialLinkProps {
  link: SocialLinkDataInterface,
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
  const { link } = props;

  return (
    <a href={link.uri} target="_blank" rel="noopener noreferrer" className="mx-3">
      <FontAwesomeIcon className={`${styles.icon} p-3`} size="4x" icon={findIconDefinition(link.icon)} title={link.name} />
    </a>
  );
}

export default SocialLink;
