import PropTypes from "prop-types"
import React , {useState, useEffect}from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

//i18n
import { withTranslation } from "react-i18next"
import SidebarContent from "./SidebarContent"
import SuperAdminSidebarContent from './SuperAdminSidebarContent'

import AuthUser from "components/AuthUser/AuthUser"


const Sidebar = props => {
  const [user,setUser] =useState( AuthUser())

  const isSuperAdmin = () => {

    if (user !== null && user !== undefined) {
      if (user.role === "SuperAdmin") {
        return <SuperAdminSidebarContent />
        
      }
      else {
        return <SidebarContent />
      }
    }
  }


  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? (
            <SimpleBar style={{ maxHeight: "100%" }}>
              {isSuperAdmin()}
            </SimpleBar>
          ) : (
            // <SidebarContent />
            isSuperAdmin()
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

Sidebar.propTypes = {
  type: PropTypes.string,
}

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  }
}
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)))
