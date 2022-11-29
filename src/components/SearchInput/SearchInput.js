import { useRef } from 'react';
import './SearchInput.scss';
import { fetchSearchCocktail } from '../../store/features/cocktailSlice';
import { useDispatch } from 'react-redux';

function SearchInput() {
  const searchValue = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    const searchTerm = searchValue.current.value;
    dispatch(fetchSearchCocktail({ searchTerm }));
  };

  return (
    <section className='search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search Cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchInput;
