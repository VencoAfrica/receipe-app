import axios from 'axios';
import { useDispatch,  } from "react-redux"

const APP_ID = '032c1495';
const APP_KEY = '56ca5460342c03dee3512e93b06b75a8';

export const fetchRecipes = async (query: string) => {
  	const dispatch = useDispatch()
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  try {
    const response = await axios.get(url);
    return dispatch({ type: "GET_RECEIPE", payload: response.data.hits })
					//  console.log(response.data.hits )
    
  } catch (error) {
    console.error(error);
  }
};