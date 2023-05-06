import { useState } from 'react';
import { useApiRequest } from './api';
import { ApiPaginatedResponse, Recipe } from '../../types';

export const useRecipes = () => {
  const [query, setQuery] = useState<string>('salad');
  const { load: loadApi, ...rest } = useApiRequest<ApiPaginatedResponse<Recipe>>({
    url: `/api/recipes/v2`,
    params: {
      type: 'public',
    },
  });

  const load = () => loadApi({ params: { q: query } });

  return { load, setQuery, query, ...rest };
};

export const useRecipe = (id: string) => {
  return useApiRequest({
    url: `/api/recipes/v2/${id}`,
    params: {
      type: 'public',
    },
  });
};
