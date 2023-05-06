import { fetchRecipes } from "../apis/testEdamamAPI"

export const ReceipeAction = ({SearchQuery}) => {	
		return fetchRecipes(SearchQuery)
        		.then((response) => {
				dispatch({ type: "GET_RECEIPE", payload: response.data })
					// console.log(response.data)
			})
			.catch((err) => {
				dispatch({
					type: "RECEIPE_ERROR",
					payload: err,
				})
			})
}