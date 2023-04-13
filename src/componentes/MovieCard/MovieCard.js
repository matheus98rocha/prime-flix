import "./movieCard.styles.js";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { TiDelete } from "react-icons/ti";

import {
  HeaderWrapper,
  ImageWrapper,
  Wrapper,
} from "./movieCard.styles.js";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, canDelete = false, getIdMovie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Wrapper>
        {!canDelete ? (
          <strong className="movie-title">{movie.title}</strong>
        ) : (
          <HeaderWrapper>
            <strong className="movie-title">{movie.title}</strong>
            <TiDelete
              className="button-remove"
              onClick={() => getIdMovie(movie.id)}
            />
          </HeaderWrapper>
        )}
        <ImageWrapper>
          <LazyLoadImage
            className="image-card"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            effect="blur"
            delayMethod="throttle"
            threshold={100}
          />
        </ImageWrapper>
      </Wrapper>
    </Link>
  );
};

export default MovieCard;
