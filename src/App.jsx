import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from 'components/SearchBar';
import ImageGallery from 'components/ImageGallery';
import s from './App.module.css';

export default function App() {
  const [query, setQuery] = useState('');

  const { grid } = s;
  return (
    <div className={grid}>
      <SearchBar onSubmit={setQuery} />
      <ImageGallery query={query} />
      <ToastContainer autoClose={3000} theme="dark" />
    </div>
  );
}
