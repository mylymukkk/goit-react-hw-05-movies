import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  padding: 10px;
  margin: 0 auto;
  max-width: calc(100vw - 48px);
  list-style: none;
`;

export const Image = styled.img`
  margin: 0 auto 10px;
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
`;

export const Item = styled.li`
  padding: 10px;
  border: 1px solid orangered;
  border-radius: 5px;
  text-align: center;

  & p {
    margin-bottom: 5px;
    font-size: 14px;
  }

  & span {
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const NoInfo = styled.p`
  padding: 10px;
  border: 1px solid orangered;
  border-radius: 5px;
  text-align: justify;
  line-height: 1.4;
  font-size: 14px;
`;
