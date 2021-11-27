import PropTypes from 'prop-types'
import React, { useState, useEffect } from "react"

import { connect } from "react-redux"
import { Row, Col, Button } from "reactstrap"

import { Link } from "react-router-dom"

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"


//Import Express Pay Req pop up
// import ExpressPayRequest from "components/ExpressPaymentRequest/index"

//Import Amadeus PaymentLink Logo
import Logo from "../../assets/images/images/logo.png";
import LogoSM from "../../assets/images/images/logosm.png";

//i18n
import { withTranslation } from "react-i18next"

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions"

import AuthUser from "components/AuthUser/AuthUser"


const Header = props => {
  const [search, setsearch] = useState(false)
  const [megaMenu, setmegaMenu] = useState(false)
  const [socialDrp, setsocialDrp] = useState(false)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  const [user, setUser] = useState(AuthUser())



  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  function tToggle() {
    props.toggleLeftmenu(!props.leftMenu)
    if (props.leftSideBarType === "default") {
      props.changeSidebarType("condensed", isMobile)
    } else if (props.leftSideBarType === "condensed") {
      props.changeSidebarType("default", isMobile)
    }
  }
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={LogoSM} alt="" height="35" />
                </span>
                <span className="logo-lg">
                  <img src={Logo} alt="" height="60" />
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                tToggle()
              }}
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            
          </div>
         
          <div className="d-flex">

            <div className=" d-inline-block welcome-msg">
           <Row>
             <Col sm="12">
             <span >Hi <b>{user.role} </b> {" "}, {user.firstName} ! {" "}</span>
             </Col>
           </Row>
          
            </div>
            <ProfileMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
}

const mapStatetoProps = state => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
  } = state.Layout
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header))
