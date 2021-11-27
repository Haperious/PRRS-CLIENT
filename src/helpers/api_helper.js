import axios from "axios"
import authHeader from "./jwt-token-access/auth-token-header"

//const API_URL = "https://paldev.developerqa.info/api/"
const API_URL = "http://localhost:4000/api"

const axiosApi = axios.create({
  baseURL: API_URL,
})
axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)
async function getAuthorized() {
  const token = authHeader()
  axiosApi.defaults.headers.common["Authorization"] = token.Authorization
}


export async function get(url) {
  const uri = API_URL + url
  await getAuthorized()
  return await axiosApi.get(uri)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

export async function post(url, data) {
  const uri = API_URL + url
  await getAuthorized()
  return await axiosApi
    .post(uri, data)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}
// export async function getById(url, data) {
//   const uri = API_URL + url + "/item?searchValue=" + data
//   await getAuthorized()
//   return await axiosApi.get(uri)
//     .then(response => response.data)
//     .catch(error => {
//       console.log(error)
//     })
// }
export async function put(url, data, config = {}) {
  await getAuthorized()
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

export async function del(url, config = {}) {
  await getAuthorized()
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

export async function patch(url, data, config = {}) {
  await getAuthorized()
  return axiosApi
    .patch(url, { ...data }, { ...config })
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

// export async function paymentrequests(url) {
//   const uri = API_URL + url
//   await getAuthorized()
//   return await axiosApi.get(uri)
//     .catch(error => {
//       console.log(error)
//     })

// }
