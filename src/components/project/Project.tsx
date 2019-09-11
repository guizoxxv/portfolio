import React from 'react';
import ProjectDataInterface from '../project-card/interfaces/projectData.interface';
import styles from './Project.module.scss';
import { getImageSrc } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TagsWrapper from '../tags-wrapper/TagsWrapper';

interface ProjectInterface {
  location: {
    state: {
      project: ProjectDataInterface
    }
  }
}

const Project: React.FC<ProjectInterface> = (props) => {
  const { project } = props.location.state;

  return (
    <div className={`${styles.project} font-montserrat p-10`}>
      <Link to="/" title="Return to home">
        <FontAwesomeIcon icon="arrow-left" />
      </Link>
      <div className="flex flex-wrap justify-center mt-2">
        <div className="w-full mb-5">
          <div>
            <div className="text-bold text-2xl mb-5">{project.title}</div>
            <div className="mb-3">
              <span className="font-bold">Data: </span>{project.date}
            </div>
            <div className="mb-3">
              <span className="font-bold">Cliente: </span>
              {project.client.link ? (
                <a className="underline hover:text-customGreen" href={project.client.link}>
                  {project.client.name}
                </a>
              ) : (
                <span>{project.client.name}</span>
              )}
            </div>
            {project.intermediary  && (
              <div className="mb-3">
                <span className="font-bold">Intermediário: </span>
                {project.intermediary.link ? (
                  <a className="underline hover:text-customGreen" href={project.intermediary.link}>
                    {project.intermediary.name}
                  </a>
                ) : (
                  <span>{project.intermediary.name}</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img src={getImageSrc(project.images[0].path)} width="300" alt={project.images[0].path} />
        </div>
      </div>
      <TagsWrapper tags={project.tags as string[]} />
    </div>
  );
}

export default Project;
