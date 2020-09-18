import React from 'react';
import styles from './ProjectsWrapper.module.scss';
import projectsData from '../../data/projects.json';
import ProjectDataInterface from '../project-card/interfaces/projectData.interface';
import ProjectCard from '../project-card/ProjectCard';
import { Link } from 'react-router-dom';

const ProjectsWrapper: React.FC = () => {
  const { projects } = projectsData;

  return (
    <section className="m-0 p-5 md:p-10">
      <h3 className="text-3xl text-center mb-5 underline">
        Projetos
      </h3>
      <div className={`${styles.projectsGrid}`}>
        {projects && projects.slice(0, 6).map((project, index) => {
          return (
            <ProjectCard key={index} project={project as ProjectDataInterface} />
          );
        })}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/projects"
          className="border border-white border-solid rounded p-3 hover:bg-teal-700 transition duration-300"
        >
          Ver todos
        </Link>
      </div>
    </section>
  );
}

export default ProjectsWrapper;
