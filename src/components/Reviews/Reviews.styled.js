import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  list-style: none;
`;

export const Author = styled.p`
  margin-bottom: 10px;
  font-size: 13px;

  & span {
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const Content = styled.p`
  padding: 10px;
  text-align: justify;
  line-height: 1.4;
  font-size: 14px;
  border: 1px solid orangered;
  border-radius: 5px;
`;
