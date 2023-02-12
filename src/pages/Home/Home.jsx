import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { List, Title } from './Home.styled';
import { getTrendingMovies } from 'services/Api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data);
      })

      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <List>
        {trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </List>
    </>
  );
};

export default Home;
