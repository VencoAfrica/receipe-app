import { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { APP_KEY, APP_ID } from '../../utils/contants';

export interface ApiRequestConfig<T> extends AxiosRequestConfig {
  initialState?: T;
}

export const useApiRequest = <T>({
  initialState,
  ...config
}: ApiRequestConfig<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>(initialState);
  const [error, setError] = useState();

  const load = async (payload?: { params?: any, data?: any }) => {
    setIsLoading(true);

    const params = payload?.params ? payload.params : config.params;
    const data = payload?.data ? payload.data : config.data;

    params.app_id = APP_ID;
    params.app_key = APP_KEY;
    
    return await new Promise<T>((resolve) => {
      axios({ baseURL: 'https://api.edamam.com', ...config, params, data })
        .then((response) => {
          resolve(response.data as T);
          setData(response.data as T);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  return { data, error, isLoading, load };
};
