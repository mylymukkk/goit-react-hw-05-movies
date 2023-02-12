import styled from 'styled-components';

export const List = styled.ul`
  padding-bottom: 5px;

  & li {
    padding: 5px;
    border: 1px solid orangered;
    border-radius: 3px;

    &:not(:last-child) {
      margin-bottom: 5px;
    }

    &:hover {
      background-color: orangered;
      border-color: white;
      
      & a {
        color: white;
      }
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 500;
  color: orangered;
`;
