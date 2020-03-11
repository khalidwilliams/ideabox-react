import React from 'react';
import IdeaCard from './IdeaCard.js';

const Ideas = ({ideas, deleteCard, toggleFavorite}) => {
  let ideaCards = ideas.map(idea => {
    return <IdeaCard 
      key={idea.id}
      id={idea.id}
      title={idea.title}
      description={idea.description}
      isFavorite={idea.isFavorite}
      deleteCard={deleteCard}
      toggleFavorite={toggleFavorite}
    />
  });
  return (
    <main>{ideas}</main>
  );
};

export default Ideas;
