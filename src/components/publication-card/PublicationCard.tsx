import React from 'react';
import PublicationDataInterface from './interfaces/publicationData.interface';
import { getDate } from '../../utils/helpers';
import styles from '../common/card.module.scss';
import TagsWrapper from '../tags-wrapper/TagsWrapper';

interface PublicationData {
  publication: PublicationDataInterface,
}

const PublicationCard: React.FC<PublicationData> = (props) => {
  const { publication } = props;

  return (
    <a
      href={publication.link}
      className={`${styles.card} flex flex-wrap font-montserrat`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full self-start text-center p-1 bg-purple-700">{publication.title}</div>
      <div className="self-stretch">
        <img
          className={`${styles.img} self-center`}
          src={publication.image}
          alt={`${publication.title} screenshot`}
        />
      </div>
      <div className={styles.cardHover}>
        <div className={styles.cardHoverContent}>
          <div className="mb-0"><small>Publicado em:</small></div>
          <p className="lg:text-xl">{publication.medium}</p>
          <p className={styles.date}>{getDate(publication.date)}</p>
          <TagsWrapper tags={publication.tags as string[]} />
        </div>
      </div>
    </a>
  );
}

export default PublicationCard;
