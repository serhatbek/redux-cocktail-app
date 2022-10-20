import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='redux-cocktail-app/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
