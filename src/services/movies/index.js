import api from "../api"

export const getMovies = async () =>{
    return await api.get("movie/now_playing", {
        params: {
        api_key:"aca05d8d5c64dc6fbe920ab547595f42",
        language: "pt-BR",
        page: 1
    }
    }).then(e => {
        return e.data.results.slice(0,10)
    });
}