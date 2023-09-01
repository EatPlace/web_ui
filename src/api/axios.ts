import { getApiUrl } from '@api/getApiUrl';
import axios from 'axios';
export const axiosInstance = axios.create({ baseURL: getApiUrl(), withCredentials: true });
