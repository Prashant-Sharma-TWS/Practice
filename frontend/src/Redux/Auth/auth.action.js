import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "./auth.actionType";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});
export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});
