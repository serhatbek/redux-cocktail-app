import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <Link className='header__brand' to={'redux-cocktail-app/'}>
          <span>Find Your Own Cocktail</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
