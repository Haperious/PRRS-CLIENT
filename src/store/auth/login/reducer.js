import { sessionTimeout } from "./actions"
import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  LOGIN_FAIL,
  SESSION_TIMEOUT,
  SESSION_TIMEOUT_SUCCESS,
  SESSION_TIMEOUT_FAIL
} from "./actionTypes"

const initialState = {
  error: "",
  loading:false,
  sessionTimeout:false
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
      }
      break
    case LOGIN_SUCCESS:
      state = {
        ...state,
        error:"",
        loading: false,
      }
      break
    case LOGIN_FAIL:
      state={
        ...state,
        error:action.payload,
        loading: false
      }
      break
    case LOGOUT_USER:
      state = { ...state }
      break
    case LOGOUT_USER_SUCCESS:
      state = { ...state }
      break
    case API_ERROR:
      state = { ...state, error: action.payload, loading: false }
      break
      case SESSION_TIMEOUT:
      state = {
          ...state,
          sessionTimeout: false
      }
  case SESSION_TIMEOUT_SUCCESS:
      state = {
          ...state,
          sessionTimeout: true
      }
  case SESSION_TIMEOUT_FAIL:
      state = {
          ...state,
          sessionTimeout: false
      }
    default:
      state = { ...state }
      break
  }
  return state
}

export default login
