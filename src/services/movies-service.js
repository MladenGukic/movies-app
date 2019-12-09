import axios from 'axios';

export default class MovieService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'

        axios.interceptors.response.use(function (response) {
            return response;
          }, function (error) {
            return Promise.reject(error);
          });
    }

    getAll(title) {
        return axios.get("movies", {params: {title}})
    }

    get(id) {
        return axios.get(`movies/${id}`)
    }

    delete(id) {
        return axios.delete(`movies/${id}`)
    }

    add(movie) {
        return axios.post(`movies`, movie)
    }

    edit(id, movie) {
        return axios.put(`cars/${id}`, movie)
    }
}

export const  movieService = new MovieService()
