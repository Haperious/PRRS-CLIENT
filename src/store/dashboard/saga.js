
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

import {

  GET_SUMMARY,
  SET_SURVEY_ANSWERS,
  GET_TOP_MERCHANTS,
  GET_TOP_USERS

} from "./actionTypes"

import {
  getSummarySuccess,
  getSummaryFail,
  setSurveyAnswersSuccess,
  setSurveyAnswersFail,
  getTopMerchantsSuccess,
  getTopMerchantsFail,
  getTopUsersSuccess,
  getTopUsersFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getSummary,
  setSurveyAnswers,
  getTopMerchants,
  getTopUsers
} from "helpers/fakebackend_helper"



function* _getSummary({ payload: dates }) {
  try {
    const response = yield call(getSummary, dates)

    if (response) { yield put(getSummarySuccess(response)) }

  } catch (error) {
    yield put(getSummaryFail(error))
  }
}


function* _setSurveyAnswers({ payload: answers }) {
  try {
    const response = yield call(setSurveyAnswers, answers)

    if (response) { yield put(setSurveyAnswersSuccess(response)) }

  } catch (error) {
    yield put(setSurveyAnswersFail(error))
  }
}

function* _getTopMerchants({ payload: data }) {
  try {
    const response = yield call(getTopMerchants, data)
    if (response) {
      yield put(getTopMerchantsSuccess(response))
    }
    else {
      yield put(getTopMerchantsFail(response))
    }
  }
  catch (error) {
    yield put(getTopMerchantsFail(error))
  }
}

function* _getTopUsers({ payload: data }) {
  try {
    const response = yield call(getTopUsers, data)
    if (response) {
      yield put(getTopUsersSuccess(response))
    }
    else {
      yield put(getTopUsersFail(response))
    }
  }
  catch (error) {
    yield put(getTopUsersFail(error))
  }
}


function* DashboardSaga() {

  yield takeEvery(GET_SUMMARY, _getSummary)
  yield takeEvery(SET_SURVEY_ANSWERS, _setSurveyAnswers)
  yield takeEvery(GET_TOP_MERCHANTS, _getTopMerchants)
  yield takeEvery(GET_TOP_USERS, _getTopUsers)
}

export default DashboardSaga
