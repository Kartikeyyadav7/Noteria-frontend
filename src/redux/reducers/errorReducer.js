import { GET_ERROR } from "../type";

const initialState = {};

const errorReducer = (state = initialState, action) => {
	switch (action.payload) {
		case GET_ERROR:
			return action.payload;
		default:
			return state;
	}
};

export default errorReducer;
