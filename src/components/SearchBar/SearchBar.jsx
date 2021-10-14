import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from 'components/SearchBar/SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  function handleChange({ currentTarget: { value } }) {
    setInputValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (e.currentTarget.query.value.trim() === '') {
      toast.info('please type a query');
      return;
    }
    const normalizedQuery = e.currentTarget.query.value.trim().toLowerCase();
    onSubmit(normalizedQuery);
    setInputValue('');
    e.currentTarget.reset();
  }

  const { searchBar, searchForm, button, label, input } = s;
  return (
    <header className={searchBar}>
      <form className={searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={button}>
          <span className={label}>Search</span>
        </button>

        <input
          className={input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
