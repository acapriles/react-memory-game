import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const memoryGameApi = axios.create({
    baseURL: VITE_API_URL,
    headers: {
        "Content-type": "application/json"
    },
    timeout: 10000, // 10 seconds
});


export default memoryGameApi;