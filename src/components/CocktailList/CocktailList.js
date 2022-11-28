import CocktailCard from '../CocktailCard/CocktailCard';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCocktails } from '../../store/features/cocktailSlice';
import { Link } from 'react-router-dom';
import './CocktailList.scss';

const CocktailList = () => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
  // const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  if (!cocktails) {
    return (
      <section className='cocktail-list'>
        <div className='container'>
          <h2>Sorry, no cocktail was found</h2>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className='cocktail-list'>
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

  return (
    <section className='cocktail-list'>
      <div className='container'>
        <h2>Cocktails</h2>
        <div className='box'>
          {cocktails?.map((cocktail) => {
            const { idDrink: id } = cocktail;

            return <CocktailCard key={id} {...cocktail} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CocktailList;
