import PropTypes from 'prop-types'
import React, { useState, useEffect } from "react"

import { Row, Col, CardBody, Card, Alert, Container, Label, Spinner } from "reactstrap"

import CarouselPage from "./CarouselPage"
// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"
import SweetAlert from "react-bootstrap-sweetalert"
//Social Media Imports
import { GoogleLogin } from "react-google-login"
// import TwitterLogin from "react-twitter-auth"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"

// actions
import { loginUser, apiError, socialLogin, sessionTimeouFail } from "store/actions"

import {sessionTimeout} from "store/actions"
import { useDispatch } from "react-redux"
// import images
import profile from "assets/images/profile-img.png"
import logo from "assets/images/logo.svg"

//Import config
import { facebook, google } from "../../config"

//Import Amadeus PaymentLink Logo
import Logo from "../../assets/images/images/logo.png";
import LogoSM from "../../assets/images/images/logosm.png";
import By from "../../assets/images/images/BY.png";
import AmadeusLogo from "../../assets/images/images/amadeuslogo.png";


const Login = props => {
  const handleValidSubmit = (event, values) => {
    props.loginUser(values, props.history)
  }
  const dispatch = useDispatch();
  const [userLoginLoading, setUserLoginLoading] = useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false)

  useEffect(()=>{
    handleSessionTimeout()
  
  },[])

  useEffect(() => {
    setUserLoginLoading(props.loading)

  }, [props.error, props.loading])

  const signIn = (res, type) => {
    const { socialLogin } = props
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      }
      socialLogin(postData, props.history, type)
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        email: res.email,
        token: res.accessToken,
        idToken: res.tokenId,
      }
      socialLogin(postData, props.history, type)
    }
  }

  //handleGoogleLoginResponse
  const googleResponse = response => {
    signIn(response, "google")
  }

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //handleFacebookLoginResponse
  const facebookResponse = response => {
    signIn(response, "facebook")
  }

  const handleSessionTimeout = ()=>{
    const timeOutValue = JSON.parse(localStorage.getItem("sessionTimeout"))
    if(timeOutValue === true){
      setconfirm_alert(true)
    }
   
  }

  return (
    <React.Fragment>
      {confirm_alert ?
            <SweetAlert
              warning
              confirmBtnText="Close"
              confirmBtnBsStyle="danger"
              title="Sorry, your session has expired."
              onConfirm={() => {
                setconfirm_alert(false)
                dispatch(sessionTimeout(false))
              }}
              closeOnClickOutside={()=>{
                setconfirm_alert(false)
                dispatch(sessionTimeout(false))
              }}
            >

             Please login again to continue.
                    </SweetAlert>
            :
            null}
      <div>

        <Container fluid className="p-0 login-dark-theme">
          <Row className="no-gutters">

            <CarouselPage />

            <Col xl={3}>
              <div className="auth-full-page-content p-md-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div>
                      <Row>
                        <img src={Logo} className="payalllink-logo-size" />
                      </Row>
                    </div>
                    <div className="p-2 my-auto">
                      <Row className=" ml-1">
                        <Label className="login-font-color-dark-theme bold font-size">Welcome</Label>
                      </Row>
                      <Row className="mb-3 ml-1">
                        <Label className="color-white">Sign in to continue to PayAllLink</Label>
                      </Row>
                      <AvForm
                        className="form-horizontal"
                        onValidSubmit={handleValidSubmit}
                      >
                        {props.error ? (
                          <Alert color="danger">{props.error}</Alert>
                        ) : null}

                        <div className="form-group">
                          <AvField
                            name="email"
                            label="Email/Username"
                            className="form-control"
                            placeholder="Enter email or username"
                            type="text"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <AvField
                            name="password"
                            label="Password"
                            type="password"
                            required
                            placeholder="Enter Password"
                          />
                        </div>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customControlInline"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customControlInline"
                          >
                            Remember me
                        </label>
                        </div>

                        <div className="mt-3">
                          {userLoginLoading ?
                            <Row className="spinner-custom mx-auto my-auto">
                              <Spinner type="border" className="mr-1" color="primary" />
                            </Row>
                            :
                            <button
                              className="btn btn-primary btn-block waves-effect waves-light"
                              type="submit"
                            >
                              Log In
                            </button>
                          }

                        </div>

                        {/* Fix this once everything is working */}
                        {/* <div className="mt-4 text-center">
                          <h5 className="font-size-14 mb-3">Sign in with</h5>

                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <FacebookLogin
                                appId={facebook.APP_ID}
                                autoLoad={false}
                                callback={facebookResponse}
                                render={renderProps => (
                                  <Link
                                    to={""}
                                    className="social-list-item bg-primary text-white border-primary"
                                  // onClick={renderProps.onClick}
                                  >
                                    <i className="mdi mdi-facebook" />
                                  </Link>
                                )}
                              />
                            </li>
                            <li className="list-inline-item">
                              <GoogleLogin
                                clientId={google.CLIENT_ID}
                                render={renderProps => (
                                  <Link
                                    to={""}
                                    className="social-list-item bg-danger text-white border-danger"
                                  // onClick={renderProps.onClick}
                                  >
                                    <i className="mdi mdi-google" />
                                  </Link>
                                )}
                                onSuccess={googleResponse}
                                onFailure={() => { }}
                              />
                            </li>
                          </ul>
                        </div> */}
                        {/* -------------------------------------------------------------------- */}

                        <div className="mt-4 text-center">
                          <Link to="/password/forgot" className="text-muted">
                            <i className="mdi mdi-lock mr-1" /> Forgot your
                          password?
                        </Link>
                        </div>
                      </AvForm>
                    </div>

                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        © {new Date().getFullYear()} PayAllLink. Crafted with{" "}
                        <i className="mdi mdi-heart text-danger"></i> by
                      Amadeus Qatar W.L.L.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  const { loading } = state.Login
  const {sessionTimeout} = state.Login
  return { 
    error,
     loading ,
    sessionTimeout}
}

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
)

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func
}