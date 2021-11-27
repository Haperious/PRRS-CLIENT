import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n

import { withTranslation } from "react-i18next"
import AuthUser from "components/AuthUser/AuthUser"

const SidebarContent = props => {

  const [user, setUser] = useState(AuthUser())
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement

    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      return false
    }
    return false
  }

  return (
    <React.Fragment>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title">{props.t("Menu")}</li>
          <li>
            <Link to="/#" className="waves-effect">
              <i className="bx bx-home-circle" />
              <span>{props.t("Dashboards")}</span>
            </Link>
          </li>
          <li>
            <Link to="/paymentrequest/list" className="waves-effect">
              <i className="bx bx-receipt" />
              <span>{props.t("Payment Request List")}</span>
            </Link>
          </li>
          <li>
            <Link to="/paymentrequest/create" className="waves-effect ">
              <i className="mdi mdi-email-send-outline"></i>
              <span>{props.t("Send Payment Request")}</span>
            </Link>
          </li>
          <li className="menu-title">{props.t("Manage")}</li>
          <li>
            <Link to="/#" className="waves-effect has-arrow">
              <i className="mdi mdi-calendar-month-outline"></i>
              <span>{props.t("My Business")}</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              {user.role !== "User" ? <li>
                <Link to="/merchant/overview/0">
                  <i className="mdi mdi-message-bulleted"></i>
                  <span>{props.t("Details")}</span>
                </Link>
              </li> :
                null}
              {user.role !== "User" ?
                <li>
                  <Link to="/users/list">
                    <i className="mdi mdi-account-details-outline"></i>
                    <span>{props.t("Users")}</span>
                  </Link>
                </li> :
                null}
              <li>
                <Link to="/customers">
                  <i className="mdi mdi-account-group-outline"></i>
                  <span> {props.t("Customers")}</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className="waves-effect has-arrow">
              <i className="mdi mdi-help-circle-outline"></i>
              <span>{props.t("Help")}</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
            
                <li>
                  <Link to="/help/userguide">
                    <i className="mdi mdi-account-details-outline"></i>
                    <span>{props.t("User Guide")}</span>
                  </Link>
                </li> 
                <li>
                  <Link to="/help/videotutorials">
                    <i className="mdi mdi-account-details-outline"></i>
                    <span>{props.t("Tutorials")}</span>
                  </Link>
                </li> 
            </ul>
          </li>

        </ul>
      </div>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
