import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #727272;
  padding: 15px 0;
`;

export const Image = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 500;
  color: orangered;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;

  & p {
    font-size: 13px;
  }

  & span {
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  color: orangered;
`;

export const Text = styled.p`
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid orangered;
  border-radius: 5px;
  text-align: justify;
  line-height: 1.4;
`;

export const GenresList = styled.ul`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & li {
    list-style-image: linear-gradient(to left, orangered, orangered);
    list-style-position: inside;
    font-size: 15px;
  }
`;

export const ExtraInfoList = styled.ul`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;

  & li {
    padding: 5px 10px;
    border: 1px solid orangered;
    border-radius: 3px;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;

    &:hover {
      background-color: orangered;
      border-color: white;

      & a {
        color: white;
      }
    }
  }
`;
