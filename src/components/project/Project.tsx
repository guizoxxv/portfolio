import React from 'react';
import ProjectDataInterface from '../project-card/interfaces/projectData.interface';
import styles from './Project.module.scss';
import { getImageSrc, getFullProjectDate } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TagsWrapper from '../tags-wrapper/TagsWrapper';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

interface ProjectInterface {
  location: {
    state: {
      project: ProjectDataInterface
    }
  }
}

class Project extends React.Component<ProjectInterface, any> {
  constructor(props: ProjectInterface) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { project } = this.props.location.state;
    const { photoIndex, isOpen } = this.state;
    const imagesPath = project.images.map(image => {
      return image.path;
    });

    return (
      <div className={`${styles.project} font-montserrat p-10`}>
        <Link to="/" title="Return to home">
          <FontAwesomeIcon icon="arrow-left" />
        </Link>
        <div className="flex flex-wrap justify-center mt-2">
          <div className="w-full sm:w-1/2 mb-5">
            <div>
              <div className="text-bold text-2xl mb-5">{project.title}</div>
              <div className="mb-3">
                <span className="font-bold">Data: </span>{getFullProjectDate(project.date)}
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
              {project.intermediary && (
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
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <img
              className="border cursor-pointer"
              src={getImageSrc(project.images[0].path)}
              width="300"
              alt={project.images[0].path}
              onClick={() => this.setState({ isOpen: true })}
            />
          </div>
        </div>
        <TagsWrapper tags={project.tags as string[]} />
        <div className="mb-3">
          <span className="font-bold">Descrição: </span>
          <div>
            {project.description || project.descriptionBrief}
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={getImageSrc(imagesPath[photoIndex])}
            onCloseRequest={() => this.setState({ isOpen: false })}
            enableZoom={false}
          />
        )}
      </div>
    );
  }
}

export default Project;
