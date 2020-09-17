import React from 'react';
import ProjectDataInterface from '../project-card/interfaces/projectData.interface';
import styles from './Project.module.scss';
import { getImageSrc, getFullProjectDate } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TagsWrapper from '../tags-wrapper/TagsWrapper';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'
import * as R from 'ramda';
import { findIconDefinition, IconLookup } from '@fortawesome/fontawesome-svg-core';

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
    const siteLink = R.pathOr(null, ['links', 'site'], project);
    const githubLink = R.pathOr(null, ['links', 'github'], project);

    return (
      <div className={`${styles.project} font-montserrat p-5`}>
        <div className="flex items-center justify-center">
          <Link to="/" title="Return to home" className="mr-4">
            <FontAwesomeIcon icon="arrow-left" />
          </Link>
          <div className="w-full text-bold text-2xl">{project.title}</div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full flex align-center justify-center my-3">
            <img
              className="border cursor-pointer"
              src={getImageSrc(project.images[0].path)}
              width="300"
              alt={project.images[0].path}
              onClick={() => this.setState({ isOpen: true })}
            />
          </div>
          <div className="w-full">
            <span className="font-bold">Data: </span>{getFullProjectDate(project.date)}
          </div>
          <div className="w-full">
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
            <div className="w-full">
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
          <TagsWrapper tags={project.tags as string[]} links={true} />
        </div>
        <div className="w-full">
          <span className="font-bold">Descrição: </span>
          <div>
            {project.description || project.descriptionBrief}
          </div>
        </div>
        <div className="w-full text-center mt-10">
          {siteLink && (
            <a href={siteLink} className="m-2 hover:text-customGreen" target="_blank" rel="noopener noreferrer" title="Site">
              <FontAwesomeIcon icon={findIconDefinition({
                "prefix": "fas",
                "iconName": "globe"
              } as IconLookup)} size="2x" />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} className="m-2 hover:text-customGreen" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FontAwesomeIcon icon={findIconDefinition({
                "prefix": "fab",
                "iconName": "github"
              } as IconLookup)} size="2x" />
            </a>
          )}
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
