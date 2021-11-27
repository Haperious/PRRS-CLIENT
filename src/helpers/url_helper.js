
//USERS
export const POST_LOGIN = "users/credentials"
export const SOCIAL_LOGIN = "/social-login"
export const GET_USERS_LIST_BY_MERCHANTID="users/userList"
export const GET_ALL_USERS="users"
export const GET_USERLIST_BY_MERCHANTID="users/merchant"
export const CREATE_USER="users"
export const DELETE_USER="users/delete/hard"
export const DEACTIVATE_USER="users"
export const NEW_USER_PASSWORD="users/password/new"
export const CHANGE_PASSOWRD = "users/password/user"
export const UPDATE_USER="users"
export const GET_USER_BY_ID="users/id"

//LOGS
export const USER_LOGS="logs/users"
export const USER_LOGS_ALL="logs/users"
export const EMAIL_LOGS_ALL ="logs/emails"
export const ERROR_LOGS_ALL="logs/errors"
export const PARSER_ERROR_LOGS="logs/parser/errorlogs"
export const PARSER_EXECUTION_LOGS="logs/parser/execlogs"
export const PLACER_ERROR_LOGS="logs/placer/errorlogs"
export const PLACER_EXECUTION_LOGS="logs/placer/execlogs"
export const GET_LOGS_TRANSACTION_UPDATE_LIST="logs/transaction"
export const SET_WHATSAPP_LOGS="logs/whatsapp/logs"
export const SYNC_CHECKER_EXECUTION_LOGS="logs/prchecker/execlogs"
export const SYNC_CHECKER_ERROR_LOGS="logs/prchecker/errorlogs"
export const GET_SETTLEMENT_LOGS="logs/settlement"

//CUSTOMER
export const GET_CUSTOMERS = "customers"
export const ADD_CUSTOMER ="customers"
export const SEARCH_CUSTOMER="customers/id"
export const UPDATE_CUSTOMER="customers"
export const GET_ALL_CUSTOMERS_BY_MERCHANTID="customers/customerList"
export const DELETE_CUSTOMER="customers/delete"

//SOURCE PORTALS
export const INSERT_ITEMS="sourceportals"
export const GET_ITEM ="sourceportals"
export const UPDATE_ITEM="sourceportals"

//PAYMENT REQUESTS
export const SEND_PAYMENT_REQUEST ="paymentrequests"
export const UPLOAD_FILE_ATTACHMENT = "paymentrequests/files"
export const UPDATE_PAYMENT_REQUEST="paymentrequests"
export const GET_PAYMENTREQUEST_LIST ="paymentrequests/merchant"
export const GET_PAYMENTREQUEST_LIST_REPORT ="paymentrequests/report"
export const GET_PAYMENTREQUEST_DETAIL ="paymentrequests"
export const GET_PAYMENTREQUEST_DETAIL_PUBLIC ="paymentrequests/public"
export const GET_PAYMENT_REQUESTS_BY_USERID="paymentrequests/user"


//EMAILS
export const SEND_EMAIL ="paymentrequests/email"


////PAYMENT
export const SEND_PAYMENT_METHOD="paymentrequests/paymentmethod"

////PAYMENTRESPONSE
export const GET_PAYMENTRESPONSE_DETAIL ="paymenthistories"

////MERCHANT
export const GET_MERCHANT_DETAIL="merchants"
export const GET_MERCHANT_LIST="merchants"
export const GET_MERCHANT_LIST_REPORT="merchants/report"
export const GET_MERCHANT_IDS="merchants/merchantIds"
// export const GET_MERCHANT_IDS="merchants/merchantIds"
export const SET_MERCHANT="merchants"


//PAYMENT GATEWAY
export const INSERT_PAYMENT_GATEWAY="paymentgateway"
export const GET_PAYMENT_GATEWAYS="paymentgateway"
export const UPDATE_PAYMENT_GATEWAY="paymentgateway"
export const GET_SINLE_PAYGATE="paymentgateway"


//PAYMENTH HISTORY
export const UPDATE_PAYMENT_HISTORY="paymentgateway/UpdatePaymentHistory"
export const SEND_NOTIFICATION_EMAIL="paymenthistories/SendPaymentNotification"
export const UPDATE_TRANSACTION_LOGS="logs/updateTransaction"


//DASHBOARD
export const GET_SUMMARY="dashboard/summary"
export const SET_SURVEY_ANSWERS="dashboard/survey"
export const GET_TOP_MERCHANT = "dashboard/merchants"
export const GET_TOP_USERS ="dashboard/users"

//SETTLEMENT
export const GET_SETTLEMENT_LISTS = "settlements"
export const SET_SETTLEMENT = "settlements"
export const  UPDATE_SETTLEMENT="settlements/update"
export const SET_FILE_UPLOAD="settlements/files"

export const GET_CUSTOMER_CONFIGURATIONS = "/customerconfigurations"
export const GET_CUSTOMER_CONFIGURATION_DETAIL = "/customerconfigurations"

