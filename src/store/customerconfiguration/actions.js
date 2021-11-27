import {
    GET_CUSTOMER_CONFIGURATIONS,
    GET_CUSTOMER_CONFIGURATIONS_SUCCESS,
    GET_CUSTOMER_CONFIGURATIONS_FAIL,
    GET_CUSTOMER_CONFIGURATION_DETAIL,
    GET_CUSTOMER_CONFIGURATION_DETAIL_SUCCESS,
    GET_CUSTOMER_CONFIGURATION_DETAIL_FAIL,
  } from "./actionTypes"
  
  export const getCustomerConfigurations = () => ({
    type: GET_CUSTOMER_CONFIGURATIONS,
  })
  
  export const getCustomerConfigurationsSuccess = configurations => ({
    type: GET_CUSTOMER_CONFIGURATIONS_SUCCESS,
    payload: configurations,
  })
  
  export const getCustomerConfigurationsFail = error => ({
    type: GET_CUSTOMER_CONFIGURATIONS_FAIL,
    payload: error,
  })
  
  export const getCustomerConfigurationDetail = id => ({
    type: GET_CUSTOMER_CONFIGURATION_DETAIL,
    id,
  })
  
  export const getCustomerConfigurationDetailSuccess = configuration => ({
    type: GET_CUSTOMER_CONFIGURATION_DETAIL_SUCCESS,
    payload: configuration,
  })
  
  export const getCustomerConfigurationDetailFail = error => ({
    type: GET_CUSTOMER_CONFIGURATION_DETAIL_FAIL,
    payload: error,
  })
  