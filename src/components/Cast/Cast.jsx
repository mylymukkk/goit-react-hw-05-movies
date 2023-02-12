import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { CastList, Image, Item, NoInfo } from './Cast.styled';

import { getCastById } from 'services/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    getCastById(movieId)
      .then(data => {
        setCastInfo(data);
      })

      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <>
      {castInfo.length !== 0 && (
        <CastList>
          {castInfo.map(({ id, character, name, profile_path }) => {
            return (
              <Item key={id}>
                {profile_path ? (
                  <Image
                    src={'https://image.tmdb.org/t/p/w500' + profile_path}
                    alt={name}
                  ></Image>
                ) : (
                  <Image
                    src="https://via.placeholder.com/200x300.png?text=no%20image"
                    alt="Not found"
                  ></Image>
                )}
                <p>
                  <span>Character: </span>
                  {character}
                </p>
                <p>
                  <span>Name:</span> {name}
                </p>
              </Item>
            );
          })}
        </CastList>
      )}

      {castInfo.length === 0 && (
        <NoInfo>We don`t have information for this movie</NoInfo>
      )}
    </>
  );
};

export default Cast;
