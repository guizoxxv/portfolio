import React from 'react';
import tagsData from '../../data/tags.json';

interface TagsWrapperProps {
  tags: string[],
}

const TagsWrapper: React.FC<TagsWrapperProps> = props => {
  const { tags } = tagsData;

  return (
    <ul className="my-10 text-center">
      {props.tags && props.tags.map((tag, index) => {
        let matchedTag = tags.find(item => {
          return item.formattedName === tag;
        });

        if(matchedTag) {
          return (
            <li key={index} className="m-2 border border-black border-solid rounded inline-block">
              <a href={matchedTag.link} className="inline-block p-1 hover:bg-gray-300" target="_blank" rel="noopener noreferrer">
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
