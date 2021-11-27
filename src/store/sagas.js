import { all, fork } from "redux-saga/effects"

//public
// import AccountSaga from "./auth/register/saga"
import AuthSaga from "./auth/login/saga"
// import ForgetSaga from "./auth/forgetpwd/saga"
// import ProfileSaga from "./auth/profile/saga"

// import CustomerSaga from "./customer/saga"
import LayoutSaga from "./layout/saga"

// import paymentrequestsSaga from "./paymentrequests/saga"
// import paymentResponsesSaga from "./paymentresponse/saga"
// import ItemsSaga from "./items/saga"
// import MerchantSaga from "./merchant/saga"
// import UserSaga from "./user/saga"
// import PayGateSaga from "./paymentgateway/saga"
// import LogsSaga from "./logs/saga"
// import PaymentHistory from "./paymenthistory/saga"
// import DashboardSaga from "./dashboard/saga"
// import MainSearch from "./search/saga"
// import Settlement from "./settlement/saga"
import customerConfigurationSaga from "./customerconfiguration/saga"
export default function* rootSaga() {
  yield all([
    //public
    fork(AuthSaga),
    // ForgetSaga(),
    // LayoutSaga(),
    // PaymentHistory(),
    // CustomerSaga(),
    // ItemsSaga(),
    LayoutSaga(),
    // MerchantSaga(),
    // paymentrequestsSaga(),
    // paymentResponsesSaga(),
    // UserSaga(),
    // PayGateSaga(),
    // LogsSaga(),
    // DashboardSaga(),
    // MainSearch(),
    // Settlement(),
    customerConfigurationSaga()
  ])
}
