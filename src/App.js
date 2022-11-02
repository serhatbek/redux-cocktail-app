import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SingleCocktail from './pages/SingleCocktail/SingleCocktail';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='redux-cocktail-app/' element={<Home />} />
        <Route
          path='redux-cocktail-app/cocktail/:cocktailID'
          element={<SingleCocktail />}
        />
      </Routes>
    </div>
  );
}

export default App;
