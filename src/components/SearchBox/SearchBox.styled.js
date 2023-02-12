import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  margin-bottom: 16px;
  align-items: center;
  text-transform: uppercase;
`;

export const Input = styled.input`
  margin-right: 5px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 3px;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background-color: rgba(255, 68, 0, 0.774);
  }
`;
