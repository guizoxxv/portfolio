import React, { useEffect } from 'react';
import styles from '../projects-wrapper/ProjectsWrapper.module.scss';
import projectsData from '../../data/projects.json';
import ProjectDataInterface from '../project-card/interfaces/projectData.interface';
import ProjectCard from '../project-card/ProjectCard';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects: React.FC = () => {
  const { projects } = projectsData;

  useEffect(() => {
    // Open page on top
    window.scrollTo(0, 0);
  });

  return (
    <div className="m-0 p-5 md:p-10">
      <div className="flex items-center justify-center mb-5">
        <Link to="/" title="Return to home" className="mr-4">
          <FontAwesomeIcon icon="arrow-left" />
        </Link>
        <div className="w-full text-bold text-2xl">Projetos</div>
      </div>
      <div className={`${styles.projectsGrid}`}>
        {projects && projects.map((project, index) => {
          return (
            <ProjectCard key={index} project={project as ProjectDataInterface} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
