import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

// //Customer
// import Customer from "./customer/reducer"

// //Items
// import Items from "./items/reducer"

//paymentrequests
// import paymentRequests from "./paymentrequests/reducer"

//paymentrequests
// import paymentResponses from "./paymentresponse/reducer"

// //User
// import Users from "./user/reducer"
// //Merchant
// import Merchants from './merchant/reducer'

// //Logs
// import Logs from './logs/reducer'

// //PaymentGateway
// import PaymentGateway from "./paymentgateway/reducer"

// //PaymentHistory
// import PaymentHistory from "./paymenthistory/reducer"

//Dashboard
import Dashboard from "./dashboard/reducer"

// //MainSearch
// import MainSearch from "./search/reducer"

// //Settlement
// import Settlement from "./settlement/reducer"

//CustomerConfiguration
import CustomerConfigurations from "./customerconfiguration/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  // paymentResponses,
  // Customer,
  // Merchants,
  // Items,
  // Users,
  // paymentRequests,
  // PaymentGateway,
  // PaymentHistory,
  // Logs,
  Dashboard,
  // MainSearch,
  // Settlement,
  CustomerConfigurations,
})

export default rootReducer
