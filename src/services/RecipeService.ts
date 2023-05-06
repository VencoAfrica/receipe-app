import apiClient from './apiClient';
import {recipeServiceRoutes} from './apiRoutes';

const listRecipesByName = (query: string) => {
    try {
        const response = apiClient.post(`${recipeServiceRoutes.listMealsByName}${query}`);
        return response;
    } catch (err) {
        console.error('List Recipes By Name Error, ', err);
        throw err;
    }
};

const getRecipeById = (id: string) => {
    try {
        const response = apiClient.get(`${recipeServiceRoutes.getMealById}${id}`);
        return response;
    } catch (err) {
        console.error('Get Recipe By ID Error, ', err);
        throw err;
    }
};

const listAllCategories = () => {
    try {
        const response = apiClient.get(`${recipeServiceRoutes.getAllCategories}`);
        return response;
    } catch (err) {
        console.error('List All Categories Error, ', err);
        throw err;
    }
};

const filterByCategory = (category: string) => {
    try {
        const response = apiClient.get(`${recipeServiceRoutes.filterByCategory}${category}`);
        return response;
    } catch (err) {
        console.error('Filter By Category Error, ', err);
        throw err;
    }
}
export default {
    listRecipesByName,
    getRecipeById,
    listAllCategories,
    filterByCategory
};
