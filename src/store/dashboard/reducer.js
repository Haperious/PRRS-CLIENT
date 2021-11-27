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

const INIT_STATE = {
  summary: {},
  error: {},
  loading: false,
}



const dashboard = (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_SUMMARY:

      return {
        ...state,
        summary: action.payload,
        loading: true
      }

    case GET_SUMMARY_SUCCESS:

      return {
        ...state,
        summary: action.payload,
        loading: false
      }

    case GET_SUMMARY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case SET_SURVEY_ANSWERS:

      return {
        ...state,
        answers: action.payload,
        loadingSurvey: true
      }

    case SET_SURVEY_ANSWERS_SUCCESS:

      return {
        ...state,
        answers: action.payload,
        loadingSurvey: false
      }

    case SET_SURVEY_ANSWERS_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingSurvey: false
      }
    case GET_TOP_MERCHANTS:
      return {
        ...state,
        topMerchants: action.payload,
        loading: true
      }
    case GET_TOP_MERCHANTS_SUCCESS:
      return {
        ...state,
        topMerchants: action.payload,
        loading: false
      }
    case GET_TOP_MERCHANTS_FAIL:
      return {
        ...state,
        topMerchants: action.payload,
        loading: false
      }
    case GET_TOP_USERS:
      return {
        ...state,
        topUsers: action.payload,
        loading: true
      }
    case GET_TOP_USERS_SUCCESS:
      return {
        ...state,
        topUsers: action.payload,
        loading: false
      }
    case GET_TOP_USERS_FAIL:
      return {
        ...state,
        topUsers: action.payload,
        loading: false
      }
    case RETURN_STATE:
      return {
        summary: {},
        error: {},
        loading: false,
        loadingSurvey: undefined,
      }


    default:
      return state
  }
}

export default dashboard
