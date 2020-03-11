import React from 'react';

const IdeaCard = ({id, title, description, deleteCard, isFavorite, toggleFavorite}) => {
  let favoriteClass;
  isFavorite ? favoriteClass = 'favorited' : favoriteClass = '';

  return (
    <section id={id} className={favoriteClass}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <button className="favorite-btn" onClick={() => toggleFavorite(id)}>Favorite</button>
        <button className="delete-btn" onClick={() => deleteCard(id)}>Delete</button>
      </div>
    </section>
  );

};

export default IdeaCard;
