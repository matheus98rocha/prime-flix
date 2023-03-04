import tmdb from "../tmdb";

export const movie = {
  getMovies: async () => {
    return await tmdb
      .get("movie/now_playing", {
        params: {
          language: "pt-BR",
          page: 1,
        },
      })
      .then((e) => e.data.results);
  },
  getMoviesById: async (movie_id) => {
    return await tmdb
      .get(`movie/${movie_id}`, {
        params: {
          language: "pt-BR",
          page: 1,
        },
      })
      .then((e) => e);
  },
  getMoviesByGenre: async (genres) => {
    return await tmdb
      .get(
        `discover/movie?api_key=aca05d8d5c64dc6fbe920ab547595f42&with_genres=${genres}`,
        {
          params: {
            language: "pt-BR",
            page: 1,
          },
        }
      )
      .then((e) => e.data.results);
  },
};
