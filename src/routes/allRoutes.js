import React from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
// Dashboard
import Dashboard from "../pages/Dashboard/index";


const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { component: () => <Redirect to="/page-404" /> },

]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  

]

export { userRoutes, authRoutes }
