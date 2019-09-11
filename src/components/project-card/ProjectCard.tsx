import React from 'react';
import styles from './ProjectCard.module.scss';
import ProjectDataInterface from './interfaces/projectData.interface';
import { Link } from 'react-router-dom';
import { getImageSrc, getProjectDate } from '../../utils/helpers';

interface ProjectData {
  project: ProjectDataInterface,
}

const ProjectCard: React.FC<ProjectData> = (props) => {
  const { project } = props;

  return (
    <Link to={{
      pathname: `/projects/${project.slug}`,
      state: {
        project
      }
    }} className={styles.card}>
      <img className={styles.img} src={getImageSrc(project.images[0].path)} alt={project.images[0].alt} />
      <div className={styles.cardHover}>
        <div className={styles.cardHoverContent}>
          <h3>{project.title}</h3>
          <p className={styles.date}>{getProjectDate(project.date)}</p>
          <p>{project.descriptionBrief}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
