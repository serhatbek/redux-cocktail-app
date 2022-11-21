import React from 'react';

const CocktailCard = ({ cocktail }) => {
  const { idDrink: id } = cocktail;
  console.log(cocktail);
  return (
    <div className='cocktail-card'>
      CocktailCard
      <p>{id}</p>
    </div>
  );
};

export default CocktailCard;
