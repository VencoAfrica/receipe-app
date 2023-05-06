const initialState = {
	data: {},
}

const ReceipeReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_RECEIPE":
			return { ...state, data: action.payload }
		case "RECEIPE_ERROR":
			return { ...state, data: action.payload }
	
		default:
			return state
	}
}

export default ReceipeReducer