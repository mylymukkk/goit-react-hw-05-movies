import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
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
`;
