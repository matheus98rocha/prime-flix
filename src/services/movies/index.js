
import api from "../api";

export const getMovies = async () => {
  return await api
    .get("movie/now_playing", {
      params: {
        language: "pt-BR",
        page: 1,
      },
    })
    .then((e) => {
      return e.data.results;
    });
};
