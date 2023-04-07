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
        `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genres}`,
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
