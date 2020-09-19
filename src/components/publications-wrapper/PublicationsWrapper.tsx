import React from 'react';
import styles from './PublicationsWrapper.module.scss';
import publicationsData from '../../data/publications.json';
import PublicationCard from '../publication-card/PublicationCard';
import PublicationDataInterface from '../publication-card/interfaces/publicationData.interface';

const PublicationsWrapper: React.FC = () => {
  const { publications } = publicationsData;

  return (
    <section className="p-0 m-5 md:m-10">
      <h3 className="text-3xl text-center mb-5 underline">
        Publicações
      </h3>
      <div className={`${styles.publicationsGrid}`}>
        {publications && publications.slice(0, 6).map((publication, index) => {
          return (
            <PublicationCard key={index} publication={publication as PublicationDataInterface} />
          );
        })}
      </div>
    </section>
  );
}

export default PublicationsWrapper;
