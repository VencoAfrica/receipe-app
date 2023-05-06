import axios from 'axios';
import {StorageKeys} from '../constants/appVariables';
import StorageService from './storageService';

const apiClient = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
  headers: {
    'Content-Type': 'application/json',
  },
});


// IN CASE OF ADDING INTERCEPTORS
apiClient.interceptors.request.use(
  async (config: any) => {
    // Do something before request is sent
    const token = await StorageService.getItem(StorageKeys.AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Do something with request error
    if (error.message === 'Network Error') {
      return Promise.reject(new Error(error.message));
    }
    console.log('APiClient Request Error from Axios', error);
    return Promise.reject(error);
  },
);


export default apiClient;
