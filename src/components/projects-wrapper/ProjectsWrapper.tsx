import React from 'react';
import styles from './ProjectsWrapper.module.scss';
import projectsData from '../../data/projects.json';
import ProjectDataInterface from '../project-card/interfaces/projectData.interface';
import ProjectCard from '../project-card/ProjectCard';

const ProjectsWrapper: React.FC = () => {
  const { projects } = projectsData;

  return (
    <section className={`${styles.projects} m-10`}>
      {projects && projects.map((project, index) => {
        return (
          <ProjectCard key={index} project={project as ProjectDataInterface} />
        );
      })}
    </section>
  );
}

export default ProjectsWrapper;
