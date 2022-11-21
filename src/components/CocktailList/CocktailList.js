import CocktailCard from '../CocktailCard/CocktailCard';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCocktails } from '../../store/features/cocktailSlice';
import { Link } from 'react-router-dom';

const CocktailList = () => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();

  console.log('cocktails', cocktails);

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  return (
    <section className='cocktail-list'>
      <div className='container'>
        <div className='box'>
          <CocktailCard />
        </div>
      </div>
    </section>
  );
};

export default CocktailList;
