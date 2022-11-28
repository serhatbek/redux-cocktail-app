import { Link } from 'react-router-dom';
import './CocktailCard.scss';

const CocktailCard = ({
  idDrink: id,
  strDrink: name,
  strDrinkThumb: img,
  strAlcoholic: info,
  strGlass: glass,
}) => {
  return (
    <div className='cocktail'>
      <figure className='cocktail__img'>
        <img src={img} alt={name} />
      </figure>
      <div className='cocktail__info'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link className='btn' to={`redux-cocktail-app/cocktail/${id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default CocktailCard;
