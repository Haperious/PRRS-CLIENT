import PropTypes from 'prop-types'
import React from "react"
import { Row, Col, Alert, Card, CardBody, Container, Label } from "reactstrap"
import CarouselPage from "./CarouselPage"
// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { userForgetPassword } from "../../store/actions"

// import images
import profile from "../../assets/images/profile-img.png"

import Logo from "../../assets/images/images/logo.png";

const ChangePassword = props => {
  function handleValidSubmit(event, values) {
    props.userForgetPassword(values, props.history)
  }

  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0  login-dark-theme">
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
                        <Label className="color-white bold font-size">Hello Username</Label>
                      </Row>
                      <Row className="mb-3 ml-1">
                        <Label className="color-white">Please enter new password.</Label>
                      </Row>
                      {props.forgetError && props.forgetError ? (
                        <Alert color="danger" style={{ marginTop: "13px" }}>
                          {props.forgetError}
                        </Alert>
                      ) : null}
                      {props.forgetSuccessMsg ? (
                        <Alert color="success" style={{ marginTop: "13px" }}>
                          {props.forgetSuccessMsg}
                        </Alert>
                      ) : null}

                      <AvForm
                        className="form-horizontal mt-4"
                        onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                      >
                        <div className="form-group">
                          <AvField
                            name="password"
                            label="Password"
                            className="form-control"
                            placeholder="Enter new password"
                            type="password"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <AvField
                            name="confirmPassword"
                            label="Confirm Password"
                            className="form-control"
                            placeholder="Confirm new password"
                            type="password"
                            required
                          />
                        </div>
                        <Row className="form-group">
                          <Col className="text-right">
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Reset
                          </button>
                          </Col>
                        </Row>
                      </AvForm>
                      <div>
                        <Label className="item-center">Remember it? <Link to="login" className="ml-1"> Sign in here</Link></Label>
                      </div>
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

ChangePassword.propTypes = {
  forgetError: PropTypes.any,
  forgetSuccessMsg: PropTypes.any,
  history: PropTypes.object,
  userForgetPassword: PropTypes.func
}

const mapStatetoProps = state => {
  const { forgetError, forgetSuccessMsg } = state.ForgetPassword
  return { forgetError, forgetSuccessMsg }
}

export default withRouter(
  connect(mapStatetoProps, { userForgetPassword })(ChangePassword)
)
