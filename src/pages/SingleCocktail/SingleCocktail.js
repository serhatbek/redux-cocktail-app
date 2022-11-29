import './SingleCocktail.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectedCocktail } from '../../store/features/cocktailSlice';
import { useParams, Link } from 'react-router-dom';

const SingleCocktail = () => {
  const { selectedCocktail, loading } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  const { cocktailID } = useParams();

  useEffect(() => {
    dispatch(fetchSelectedCocktail(cocktailID));
  }, []);

  if (loading) {
    return (
      <section className='single-cocktail'>
        <div className={loading ? 'container container--full' : 'container'}>
          <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    );
  }

  if (!selectedCocktail) {
    return (
      <section className='single-cocktail'>
        <div className='container container--full'>
          <h2>Sorry, no cocktail was found</h2>
        </div>
      </section>
    );
  }

  const {
    strDrink: name,
    strDrinkThumb: img,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = selectedCocktail;

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  return (
    <section className='single-cocktail'>
      <Link to='/redux-cocktail-app' className='btn'>
        Back Home
      </Link>
      <h2>{name}</h2>
      <div className='container'>
        <div className='single-cocktail__card'>
          <figure>
            <img src={img} alt={name} />
          </figure>
          <div className='single-cocktail__card__info'>
            <p>
              <span className='single-cocktail__card__title'>name : </span>
              {name}
            </p>
            <p>
              <span className='single-cocktail__card__title'>category : </span>
              {category}
            </p>
            <p>
              <span className='single-cocktail__card__title'>info : </span>
              {info}
            </p>
            <p>
              <span className='single-cocktail__card__title'>glass : </span>
              {glass}
            </p>
            <p>
              <span className='single-cocktail__card__title'>
                instructions :
              </span>
              {instructions}
            </p>
            <p>
              <span>ingredients : </span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}, </span> : null;
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
