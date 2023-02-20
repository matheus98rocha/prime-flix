import styled from "styled-components";

export const MovieDetailsWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  margin: 0 auto;

  flex-direction: column;

  max-width: 800px;
  padding: 0 8px;

  gap: 10px;
  h1 {
    margin: 14px 0;
    text-align: center;
  }
  .film-details-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .film-details-main .image-movie .img-movie {
    border-radius: 8px;
    width: 800px;
    max-width: 100%;
    height: 320px;
    max-height: 340px;

    object-fit: cover;

    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.38);
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.38);

    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
  }
  .movie-info-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    height: 320px;

    gap: 20px;
  }
  .movie-info-wrapper h3 {
    margin-top: 14px;
  }

  .movie-info-wrapper span {
    height: 120px;
    margin: 8px 0;
    overflow: hidden;

    font-size: 15px;
  }

  .movie-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    /* top: 10px; */
  }

  .movie-info p {
    border: 1px solid gray;
    padding: 0.2rem;
    color: gray;
    font-size: 0.8rem;
  }

  .buttons-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    top: 10px;
  }

  .buttons-wrapper button {
    margin: 10px 12px 0 0;
    font-size: 1.3rem;
    border: 0;
    outline: none;
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    background-color: white;
    border: 1px solid gainsboro;
  }

  .buttons-wrapper button a {
    text-decoration: none;
    color: var(--primary-dark);
  }

  .buttons-wrapper button:hover {
    color: var(--primary-light);
    background-color: brown;
  }

  .buttons-wrapper button a:hover {
    color: var(--primary-light);
  }

  .player-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .player-wrapper .react-player {
    border-radius: 8px;
    overflow: hidden;

    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.38);
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.38);
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    gap: 20px;

    .film-details-main {
      display: grid;
      grid-template-columns: 1fr;
    }
    .film-details-main,
    .image-movie,
    .img-movie {
      display: none;
    }

    .reactPlayer {
      width: 90%;
    }
  }
`;
