import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.article`
  width: 100%;
  background-color: transparent;
  padding: 15px;
  border-radius: 4px;

  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;

  .movie-title {
    font-size: 0.7rem;
    font-weight: bold;
    padding: 10px;
    position: absolute;
    color: #fefefe;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .movie-title {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 340px;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  .image-card {
    width: 250px;
    max-height: 340px;
    display: block;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    transition: transform 0.5s ease-in-out;
    overflow: hidden;
  }

  .image-card:hover {
    transform: scale(1.1);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  @media only screen and (max-width: 700px) {
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      transition: none;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    img:hover {
      transform: none;
    }
  }
`;

export const CardLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  font-size: 1.5rem;
  background-color: var(--primary-blue);
  color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  text-decoration: none;

  @media only screen and (max-width: 700px) {
    display: block;
    width: 250px;
    text-align: center;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  width: 250px;

  padding: 0 4px;

  .movie-title {
    font-size: 0.7rem;
    font-weight: bold;
    position: relative;
    color: var(--primary-light);
  }

  .button-remove {
    color: var(--primary-light);
    font-size: 1.3rem;
  }

  .button-remove :hover {
    cursor: pointer;
  }
`;