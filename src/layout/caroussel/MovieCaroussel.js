import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  CarrouselWrapper,
  MovieCarousselWrapper,
} from "./movieCaroussel.styles";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useEffect } from "react";

function MovieCaroussel({ movies }) {
  const caroussel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    caroussel.current.scrollLeft -= caroussel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    caroussel.current.scrollLeft += caroussel.current.offsetWidth;
  };

  useEffect(() => {
    setTimeout(() => handleRightClick, 1000);
  }, []);

  return (
    <MovieCarousselWrapper>
      <button className="buttonArrow" onClick={handleLeftClick}>
        <MdArrowBackIosNew size={25} />
      </button>
      <CarrouselWrapper ref={caroussel}>
        {movies.map((movie) => {
          return (
            <div className="image-slide" key={movie.id}>
              <LazyLoadImage
                className="image-item"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                effect="blur"
                delayMethod="throttle"
                threshold={100}
              />
            </div>
          );
        })}
      </CarrouselWrapper>
      <button className="buttonArrow" onClick={handleRightClick}>
        <MdArrowForwardIos size={25} />
      </button>
    </MovieCarousselWrapper>
  );
}

export default MovieCaroussel;
