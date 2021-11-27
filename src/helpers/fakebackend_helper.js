import axios from "axios"
import { del, get, post, put,patch } from "./api_helper"
import * as url from "./url_helper"

////Gets the logged in user data from local session
const getLoggedInUser = () => {
  const user = localStorage.getItem("user")
  if (user) return JSON.parse(user)
  return null
}

////is user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null
}

// export const uploadFileAttachment = file => post(url.UPLOAD_FILE_ATTACHMENT, file)
export const getCustomerConfigurations = () => get(url.GET_CUSTOMER_CONFIGURATIONS)

// USER
const postLogin = data => post(url.POST_LOGIN, data)


export {
  getLoggedInUser,
  isUserAuthenticated,
  postLogin,
}
