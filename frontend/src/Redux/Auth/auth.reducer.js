import { getFromLocal, setInLocal } from "../../Utils/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "./auth.actionType";

export const authReducer = (
  state = {
    isUserLoggedIn: getFromLocal("userToken") ? true : false,
    userToken: getFromLocal("userToken"),
    isLoading: false,
    error: false,
  },
  { type, payload }
) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state.auth,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      setInLocal("userToken", payload);
      return {
        ...state.auth,
        isUserLoggedIn: true,
        userToken: payload,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state.auth,
        isLoading: false,
        error: true,
      };
    case LOGOUT_REQUEST:
      return {
        ...state.auth,
        isLoading: true,
      };
    case LOGOUT_SUCCESS:
      setInLocal("userToken", "");
      return {
        ...state.auth,
        isUserLoggedIn: true,
        userToken: "",
        isLoading: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state.auth,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
