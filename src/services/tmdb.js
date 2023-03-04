import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

tmdb.defaults.params = {
  api_key: process.env.REACT_APP_API_KEY,
};

export default tmdb;
