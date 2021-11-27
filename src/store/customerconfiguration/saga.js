import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_CUSTOMER_CONFIGURATIONS,
   GET_CUSTOMER_CONFIGURATION_DETAIL } from "./actionTypes"
import {
  getCustomerConfigurationsSuccess,
  getCustomerConfigurationsFail,
  getCustomerConfigurationDetailSuccess,
  getCustomerConfigurationDetailFail
} from "./actions"

//Include Both Helper File with needed methods
import { getCustomerConfigurations,
    //  getCustomerConfigurationDetail 
    } from "helpers/fakebackend_helper"

function* _getCustomerConfigurations() {
  try {
    const response = yield call(getCustomerConfigurations)
    yield put(getCustomerConfigurationsSuccess(response))
  } catch (error) {
    yield put(getCustomerConfigurationsFail(error))
  }
}

function* _getCustomerConfigurationDetail({ id }) {
  try {
    const response = yield call(getCustomerConfigurationDetail, id)
    yield put(getCustomerConfigurationDetailSuccess(response))
  } catch (error) {
    yield put(getCustomerConfigurationDetailFail(error))
  }
}

function* customerConfigurationSaga() {
  yield takeEvery(GET_CUSTOMER_CONFIGURATIONS, _getCustomerConfigurations)
  yield takeEvery(GET_CUSTOMER_CONFIGURATION_DETAIL, _getCustomerConfigurationDetail)
}

export default customerConfigurationSaga
