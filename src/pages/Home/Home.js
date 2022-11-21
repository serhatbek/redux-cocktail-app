import React from 'react';
import CocktailList from '../../components/CocktailList/CocktailList';
import SearchInput from '../../components/SearchInput/SearchInput';

const Home = () => {
  return (
    <main className='home'>
      <SearchInput />
      <CocktailList />
    </main>
  );
};

export default Home;
