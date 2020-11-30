import { SET_CURRENT_USER } from "../type";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const registerUser = (userDetails) => async (dispatch) => {
	try {
		const res = await axios.post(
			"http://localhost:5000/api/user/signup",
			userDetails
		);
		const { token } = res.data;
		localStorage.setItem("token", token);
		setAuthToken(token);
		const decoded = jwtDecode(token);
		dispatch(setUser(decoded));
	} catch (err) {
		const error = err.response.data.errors;
		if (error) {
			console.log(error);
		}
	}
};

export const loginUser = (userDetails) => async (dispatch) => {
	try {
		const res = await axios.post(
			"http://localhost:5000/api/user/login",
			userDetails
		);
		const { token } = res.data;
		localStorage.setItem("token", token);
		setAuthToken(token);
		const decoded = jwtDecode(token);
		dispatch(setUser(decoded));
	} catch (err) {
		const error = err.response.data.errors;
		if (error) {
			console.log(error);
		}
	}
};

export const setUser = (decodedToken) => {
	return {
		type: SET_CURRENT_USER,
		payload: decodedToken,
	};
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem("token");
	setAuthToken(false);
	dispatch(setUser({}));
};
