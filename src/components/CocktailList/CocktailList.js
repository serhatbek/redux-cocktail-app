import CocktailCard from '../CocktailCard/CocktailCard';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCocktails } from '../../store/features/cocktailSlice';
import { Link } from 'react-router-dom';

const CocktailList = () => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  // useEffect(() => {
  //   if (cocktails) {
  //     const newCocktails = cocktails.map()
  //   }
  // },[cocktails])

  return (
    <section className='cocktail-list'>
      <div className='container'>
        <div className='box'>
          {cocktails?.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CocktailList;
