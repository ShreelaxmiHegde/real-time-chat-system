import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const  api = axios.create({
    baseURL: "http://localhost:8080/",
    withCredentials: true
});

export default api;