import {
 
    GET_CUSTOMER_CONFIGURATIONS_SUCCESS,
    GET_CUSTOMER_CONFIGURATIONS_FAIL,
  
    GET_CUSTOMER_CONFIGURATION_DETAIL_SUCCESS,
    GET_CUSTOMER_CONFIGURATION_DETAIL_FAIL,
  } from "./actionTypes"
  
  const INIT_STATE = {
    customerConfigurations: [],
    customerConfigurationDetail: {},
    error: {},
  }
  
  const CustomerConfigurations = (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_CUSTOMER_CONFIGURATIONS_SUCCESS:
        return {
          ...state,
          customerConfigurations: action.payload,
        }
  
      case GET_CUSTOMER_CONFIGURATIONS_FAIL:
        return {
          ...state,
          error: action.payload,
        }
  
      case GET_CUSTOMER_CONFIGURATION_DETAIL_SUCCESS:
        return {
          ...state,
          customerConfigurationDetail: action.payload,
        }
  
      case GET_CUSTOMER_CONFIGURATION_DETAIL_FAIL:
        return {
          ...state,
          error: action.payload,
        }
  
      default:
        return state
    }
  }
  
  export default CustomerConfigurations
  