import axios from "axios"

export const makeRequest = axios.create({
    baseUrl: "http://localhost:5000/api/"
})