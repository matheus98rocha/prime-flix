import axios from 'axios'

const api =  axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

// axios.defaults.headers.common ={
//     "api_key":"aca05d8d5c64dc6fbe920ab547595f42"
// }

export default api;