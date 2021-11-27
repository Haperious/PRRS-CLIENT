import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ToastContainer } from 'react-toastify';
import AuthUser from "components/AuthUser/AuthUser"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Col, Row, Container, Card, CardBody, FormGroup } from 'reactstrap'
import Select from "react-select"
import { useDispatch } from "react-redux"
import { connect } from 'react-redux'
import {getCustomerConfigurations} from "store/actions"
import makeAnimated from "react-select/animated"
import { uploadFileAttachment } from "helpers/fakebackend_helper"
const animatedComponents = makeAnimated()

const multi = {

  filtered: [],
  select2: undefined

}
const Dashboard = props => {

  const {
    onGetCustomerConfigurations,
    customerConfigurations
  } = props


  
  useEffect(() => {
    onGetCustomerConfigurations()
  }, [])

  useEffect(()=>{console.log(customerConfigurations),[customerConfigurations]})

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>

          <Breadcrumbs breadcrumbItem=" DASHBOARD" />

          <Row>
            
          </Row>




        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  customerConfigurations: PropTypes.object
}


const mapStateToProps = state => {
  console.log(state)
  return {
    customerConfigurations: state.CustomerConfigurations.customerConfigurations,
  }
}

const mapDispatchToProps = dispatch => ({
  onGetCustomerConfigurations :()=> dispatch(getCustomerConfigurations())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
