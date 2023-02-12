import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';
import { Item } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            <p>{title}</p>
          </Link>
        </Item>
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
