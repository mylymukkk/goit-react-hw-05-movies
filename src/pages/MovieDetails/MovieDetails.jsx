import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';

import BackLink from '../../components/BackLink/BackLink';

import { getMovieById } from '../../services/Api';

import {
  Container,
  Image,
  Title,
  Wrapper,
  Subtitle,
  Text,
  GenresList,
  ExtraInfoList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [movieInfo, setMovieInfo] = useState([]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieInfo;

  useEffect(() => {
    getMovieById(movieId)
      .then(data => {
        setMovieInfo(data);
      })

      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      <Container>
        {poster_path ? (
          <Image
            src={'https://image.tmdb.org/t/p/w500' + poster_path}
            alt={title}
          />
        ) : (
          <Image
            src="https://via.placeholder.com/300x500.png?text=no%20image"
            alt="No image"
          />
        )}
        <div>
          <Title>{title}</Title>
          <Wrapper>
            <p>
              <span>Release date: </span>
              {new Date(release_date).getFullYear()}
            </p>
            <p>
              <span>User Score: </span>
              {Number.parseFloat(vote_average).toFixed(1)}
            </p>
          </Wrapper>

          <Subtitle>Overview</Subtitle>
          <Text>{overview}</Text>
          {genres && (
            <>
              <Subtitle>Genres</Subtitle>
              <GenresList>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </GenresList>
            </>
          )}
        </div>
      </Container>
      <Subtitle>Additional information</Subtitle>
      <ExtraInfoList>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ExtraInfoList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
