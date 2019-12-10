import axios from 'axios';

export default class AuthService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }

    login(credentials) {
        return axios.post("login", credentials)
    }

    register(user) {
        return axios.post("register", user)
    }
}

export const  authService = new AuthService()

