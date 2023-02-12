import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MovieList from 'components/MovieList/MovieList';
import SearchBox from 'components/SearchBox/SearchBox';
import {
  notificationError,
  notificationInfo,
} from 'components/Notification/Notification';

import { getMoviesByQuery } from 'services/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    getMoviesByQuery(query)
      .then(data => {
        if (data.length === 0) {
          return notificationError();
        }
        setMovies(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [query]);

  const visibleMovies = movies.filter(({ title }) =>
    title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const searchValue = form.elements.query.value;

    const nextParams = searchValue !== '' ? { query: searchValue } : {};
    setSearchParams(nextParams);

    form.reset();

    if (searchValue === '') {
      notificationInfo();
    }

    setMovies([]);
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      {movies && <MovieList movies={visibleMovies} />}
      <ToastContainer />
    </>
  );
};

export default Movies;
