import axios from "axios"

const BASE_URL = 'http://localhost:8000/api';
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;