import axios from "axios";

const server = axios.create({
  // Local URL
  // baseURL: "http://localhost:8000",

  //Developmento URL
  baseURL: process.env.REACT_APP_API_DEVELOPMENT,
});

export default server;
