import {
	GET_NOTE,
	GET_NOTES,
	NOTE_LOADING,
	DELETE_NOTE,
	CREATE_NOTE,
	GET_ERROR,
} from "../type";
import axios from "axios";

export const createNote = (note) => async (dispatch) => {
	try {
		const res = await axios.post("http://localhost:5000/api/note/", note);
		console.log(res.data);
		dispatch({
			type: CREATE_NOTE,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: GET_ERROR,
			payload: error.response.data,
		});
	}
};

export const getNotes = () => async (dispatch) => {
	try {
		dispatch(loadingNote);
		const res = await axios.get("http://localhost:5000/api/note/");
		console.log(res.data);
		dispatch({
			type: GET_NOTES,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: GET_NOTES,
			payload: null,
		});
	}
};

export const getNote = (id) => async (dispatch) => {
	try {
		dispatch(loadingNote);
		const res = await axios.get(`http://localhost:5000/api/note/${id}`);
		console.log(res.data);
		dispatch({
			type: GET_NOTE,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: GET_NOTE,
			payload: null,
		});
	}
};

export const deleteNote = (id) => async (dispatch) => {
	try {
		await axios.delete(`http://localhost:5000/api/note/${id}`);
		dispatch({
			type: DELETE_NOTE,
			payload: id,
		});
	} catch (error) {
		console.log(error.response.data);
		dispatch({
			type: GET_ERROR,
			payload: error.response.data,
		});
	}
};

const loadingNote = () => {
	return {
		type: NOTE_LOADING,
	};
};
