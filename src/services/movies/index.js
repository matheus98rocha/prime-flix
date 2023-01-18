import api from "../api";

export const movie = {
  getMovies: async () => {
    return await api
      .get("movie/now_playing", {
        params: {
          language: "pt-BR",
          page: 1,
        },
      })
      .then((e) => e.data.results);
  },
  getMoviesById: async (movie_id) => {
    return await api
      .get(`movie/${movie_id}`, {
        params: {
          language: "pt-BR",
          page: 1,
        },
      })
      .then((e) => e);
  },
};
