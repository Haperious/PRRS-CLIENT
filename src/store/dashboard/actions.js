import {

  GET_SUMMARY,
  GET_SUMMARY_SUCCESS,
  GET_SUMMARY_FAIL,
  SET_SURVEY_ANSWERS,
  SET_SURVEY_ANSWERS_SUCCESS,
  SET_SURVEY_ANSWERS_FAIL,
  GET_TOP_MERCHANTS,
  GET_TOP_MERCHANTS_SUCCESS,
  GET_TOP_MERCHANTS_FAIL,
  GET_TOP_USERS,
  GET_TOP_USERS_SUCCESS,
  GET_TOP_USERS_FAIL,
  RETURN_STATE

} from "./actionTypes"

export const getSummary = (dates) => ({
  type: GET_SUMMARY,
  payload:dates
})

export const getSummarySuccess = summary => (
  {
    type: GET_SUMMARY_SUCCESS,
    payload: summary,
  })

export const getSummaryFail = error => ({
  type: GET_SUMMARY_FAIL,
  payload: error,
})

export const setSurveyAnswers = (answers) => ({
  type: SET_SURVEY_ANSWERS,
  payload: answers
})

export const setSurveyAnswersSuccess = answers => (
  {
    type: SET_SURVEY_ANSWERS_SUCCESS,
    payload: answers,
  })

export const setSurveyAnswersFail = error => ({
  type: SET_SURVEY_ANSWERS_FAIL,
  payload: error,
})

export const getTopMerchants = data =>({
  type:GET_TOP_MERCHANTS,
  payload:data
})

export const getTopMerchantsSuccess = data =>({
  type:GET_TOP_MERCHANTS_SUCCESS,
  payload:data
})

export const getTopMerchantsFail = data =>({
  type:GET_TOP_MERCHANTS_FAIL,
  payload:data
})

export const getTopUsers = data =>({
  type: GET_TOP_USERS,
  payload:data
})

export const getTopUsersSuccess = data =>({
  type: GET_TOP_USERS_SUCCESS,
  payload:data
})

export const getTopUsersFail = data =>({
  type: GET_TOP_USERS_FAIL,
  payload:data
})



export const returnStateDashboard = data => ({
  type: RETURN_STATE,
  payload: data
})

