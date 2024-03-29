import styled from "styled-components";

export const Wrapper = styled.article`
  width: 100%;
  background-color: transparent;
  border-radius: 4px;

  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

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
    color: ${(props) => props.theme.colors.primaryWhite};
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
  border-radius: 8px;

  .image-card {
    width: 250px;
    max-height: 340px;
    display: block;
    border-radius: 8px;

    transition: transform 0.5s ease-in-out;
    overflow: hidden;
  }

  .image-card:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }

  @media only screen and (max-width: 700px) {
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      transition: none;
      border-radius: 8px;
    }

    img:hover {
      transform: none;
    }
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
    color: ${(props) => props.theme.colors.primaryWhite};
  }

  .button-remove {
    color: ${(props) => props.theme.colors.primaryWhite};
    font-size: 1.3rem;
  }

  .button-remove :hover {
    cursor: pointer;
  }
`;
