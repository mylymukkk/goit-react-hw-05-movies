import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewsList, Author, Content } from './Reviews.styled';

import { getReviewById } from 'services/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewById(movieId)
      .then(data => {
        setReviews(data);
      })

      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Author>
                <span>Author: </span>
                {author}
              </Author>
              <Content>{content}</Content>
            </li>
          ))}
        </ReviewsList>
      )}

      {reviews.length === 0 && (
        <Content>We don`t have information for this movie</Content>
      )}
    </>
  );
};

export default Reviews;
