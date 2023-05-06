import axios from "axios";

const APP_ID = "00365eab";
const APP_KEY = "120e49e15f5cc302351d80e7c4c0ae4b";

export const fetchRecipesByQuantity = async (query: string) => {
  const { quantity, mealType }: any = query;
  const url = `https://api.edamam.com/search?q=${quantity}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.hits;
  } catch (error) {
    // console.error(error);
  }
};

export const fetchRecipesBycuisineType = async (query: string) => {
  const { cuisineType, mealType }: any = query;
  const url = `https://api.edamam.com/search?cuisineType=${cuisineType}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.hits;
  } catch (error) {
    // console.error(error);
  }
};
