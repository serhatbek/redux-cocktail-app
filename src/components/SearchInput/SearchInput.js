import { useRef } from 'react';
import './SearchInput.scss';

function SearchInput() {
  const searchValue = useRef();
  return (
    <section className='search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>Search Cocktail</label>
          <input type='text' name='name' id='name' ref={searchValue} />
        </div>
      </form>
    </section>
  );
}

export default SearchInput;
