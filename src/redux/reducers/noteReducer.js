import {
	GET_NOTE,
	GET_NOTES,
	NOTE_LOADING,
	DELETE_NOTE,
	CREATE_NOTE,
} from "../type";

const initialState = {
	note: {},
	notes: [],
	loading: false,
};

const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case NOTE_LOADING:
			return {
				...state,
				loading: true,
			};
		case GET_NOTE:
			return {
				...state,
				loading: false,
				note: action.payload,
			};
		case GET_NOTES: {
			return {
				...state,
				loading: false,
				notes: action.payload,
			};
		}
		case CREATE_NOTE: {
			return {
				...state,
				posts: [action.payload, ...state.posts],
			};
		}
		case DELETE_NOTE: {
			return {
				...state,
				posts: state.posts.filter((post) => post._id !== action.payload),
			};
		}
		default:
			return state;
	}
};

export default noteReducer;
