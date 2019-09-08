import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import SocialLinkDataInterface from './socialLinkData.interface';
import styles from './styles.module.scss';

interface SocialLinkProps {
  link: SocialLinkDataInterface,
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
  const { link } = props;

  return (
    <a href={link.uri} target="_blank" className="mx-3">
      {/* <FontAwesomeIcon icon={link.icon as IconName} size="2x" /> */}
      <FontAwesomeIcon className={`${styles.icon} p-3`} size="4x" icon={findIconDefinition(link.icon)} />
    </a>
  );
}

export default SocialLink;
