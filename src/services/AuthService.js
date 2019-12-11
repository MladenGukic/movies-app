import axios from 'axios';

export default class AuthService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'

        axios.defaults.headers.common = {
            'Authorization':`Bearer ${localStorage.getItem('token')}`,
             accept: 'application/json'
        }

    }

    login(credentials) {
        return axios.post("login", credentials)
        .then((r) => {
            axios.defaults.headers.common.Authorization = `Bearer ${r.data.token}`
            return r
        })
    }

    register(user) {
        return axios.post("register", user)
    }
}

export const  authService = new AuthService()

