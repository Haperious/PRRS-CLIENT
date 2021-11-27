import React from 'react'
import { Row, Col, UncontrolledAlert } from "reactstrap"

const Notification = () => {
    return (
        <div style={{ zIndex: "10000", position: "absolute", right: "0px", top: "80px" }}>

        <UncontrolledAlert
          color="danger"
          className="alert-dismissible fade show"
          role="alert"
        >
          <small><i className="mdi mdi-alert-outline me-2"></i>{" "} <b>PayAllink daily maintenance schedule is 10 pm.</b></small>
        </UncontrolledAlert>
      </div>
    )
}

export default Notification
