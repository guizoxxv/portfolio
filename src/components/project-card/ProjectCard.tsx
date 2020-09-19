import React from 'react';
import styles from '../common/card.module.scss';
import ProjectDataInterface from './interfaces/projectData.interface';
import { Link } from 'react-router-dom';
import { getDate, getImageSrc } from '../../utils/helpers';
import TagsWrapper from '../tags-wrapper/TagsWrapper';

interface ProjectData {
  project: ProjectDataInterface,
}

const ProjectCard: React.FC<ProjectData> = (props) => {
  const { project } = props;

  return (
    <Link
      to={{
        pathname: `/projects/${project.slug}`,
        state: {
          project
        }
      }}
      className={`${styles.card} flex flex-wrap content-start font-montserrat`}
    >
      <div className="w-full text-center p-1 bg-teal-700">{project.title}</div>
      <img
        className={styles.img}
        src={getImageSrc(project.images[0].path)}
        alt={project.images[0].alt}
      />
      <div className={styles.cardHover}>
        <div className={styles.cardHoverContent}>
          <p className="lg:text-xl">{project.descriptionBrief}</p>
          <p className={styles.date}>{getDate(project.date)}</p>
          <TagsWrapper tags={project.tags as string[]} />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
