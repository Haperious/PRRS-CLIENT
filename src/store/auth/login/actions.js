import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  SOCIAL_LOGIN,
  LOGIN_FAIL,
  SESSION_TIMEOUT,
  SESSION_TIMEOUT_SUCCESS,
  SESSION_TIMEOUT_FAIL
} from "./actionTypes"

export const loginUser = (user, history) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  }
}

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  }
}

export const loginFail = user =>{
  return{
    type:LOGIN_FAIL,
    payload:user
  }
}

export const logoutUser = history => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  }
}

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  }
}

export const apiError = error => {
  return {
    type: API_ERROR,
    payload: error,
  }
}

export const socialLogin = (data, history, type) => {
  return {
    type: SOCIAL_LOGIN,
    payload: { data, history, type },
  }
}

export const sessionTimeout = (user) => ({
  type: SESSION_TIMEOUT,
  payload: user
})
export const sessionTimeoutSuccess = (user) => ({
  type: SESSION_TIMEOUT_SUCCESS,
  payload: user
})
export const sessionTimeouFail = (user) => ({
  type: SESSION_TIMEOUT_FAIL,
  payload: user
})