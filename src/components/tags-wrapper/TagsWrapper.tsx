import React from 'react';
import tagsData from '../../data/tags.json';

interface TagsWrapperProps {
  tags: string[],
  links?: boolean,
}

const TagsWrapper: React.FC<TagsWrapperProps> = props => {
  const { tags } = tagsData;

  return (
    <ul className="my-5">
      {props.tags && props.tags.map((tag, index) => {
        let matchedTag = tags.find(item => {
          return item.formattedName === tag;
        });

        if(matchedTag) {
          return (
            <li key={index} className="m-1 border border-white border-solid rounded inline-block">
              <a href={matchedTag.link} className={`text-sm inline-block p-1 ${props.links ? `hover:bg-teal-700` : ''}`} target="_blank" rel="noopener noreferrer">
                {matchedTag.name}
              </a>
            </li>
          );
        } else {
          return false;
        }
      })}
    </ul>
  );
}

export default TagsWrapper;
