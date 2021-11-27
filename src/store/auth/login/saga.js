import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN, SESSION_TIMEOUT } from "./actionTypes"
import { 
  apiError, 
  loginSuccess,
  logoutUserSuccess,
  loginFail,
  sessionTimeoutSuccess,
  sessionTimeouFail } from "./actions"

import {
  postLogin,
} from "../../../helpers/fakebackend_helper"


function* loginUser({ payload: { user, history } }) {
  try {
    
     if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postLogin, {
        email: user.email,
        password: user.password,
      })
     if(response.message !== "Username or password is incorrect" && response.message !== "User is deactivated"){
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
      history.push("/dashboard")
     }
     else{
      yield put(loginFail(response.message))
     }
    }
   
  } catch (error) {
   
    yield put(apiError(error))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout)
      yield put(logoutUserSuccess(response))
    }
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend()
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type,
      )
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else {
      const response = yield call(postSocialLogin, data)
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}
function* _sessionTimeout({payload:user}){
  try{
     if(user === true){
      sessionTimeoutSuccess(true)
      localStorage.setItem("sessionTimeout",true)
      localStorage.removeItem("authUser")
      window.location = "/login";
     }
     else{
         sessionTimeouFail(false)
         localStorage.removeItem("sessionTimeout")
     }
  }
  catch(error){
      sessionTimeouFail(false)
  }
}


function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeLatest(SOCIAL_LOGIN, socialLogin)
  yield takeEvery(LOGOUT_USER, logoutUser)
  yield takeEvery(SESSION_TIMEOUT, _sessionTimeout)
}

export default authSaga
