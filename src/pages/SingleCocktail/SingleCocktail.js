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

  console.log('single', selectedCocktail);

  useEffect(() => {
    dispatch(fetchSelectedCocktail(cocktailID));
  }, [cocktailID]);

  return (
    <section className='single-cocktail'>
      <h2>Cocktail Name</h2>
      <div className='single-cocktail__card'>
        <figure>{/* <img src={} alt={} /> */}</figure>
        <div>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
