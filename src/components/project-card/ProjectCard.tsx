import React from 'react';
import styles from './ProjectCard.module.scss';
import ProjectDataInterface from './interfaces/projectData.interface';
import moment from 'moment';

interface ProjectData {
  project: ProjectDataInterface,
}

const getImageSrc = (path: string) => {
  return require('../../assets/images/' + path); 
}

const getProjectDate = (date: string) => {
  return moment(date).format('MMM, YYYY');
}

const ProjectCard: React.FC<ProjectData> = (props) => {
  const { project } = props;

  return (
    <div className={styles.card}>
      <img className={styles.img} src={getImageSrc(project.images[0].path)} alt="trabalho.imagem.alt" />
      <div className={styles.cardHover}>
        <div className={styles.cardHoverContent}>
          <h3>{project.title}</h3>
          <p className={styles.date}>{getProjectDate(project.date)}</p>
          <p>{project.descriptionBrief}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
