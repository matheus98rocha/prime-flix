import api from "../api";

export const getMovies = async () => {
  return await api
    .get("movie/now_playing", {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: "pt-BR",
        page: 1,
      },
    })
    .then((e) => {
      return e.data.results.slice(0, 10);
    });
};
