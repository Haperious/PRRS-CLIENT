import React, { useState, useEffect } from "react"
import { Row, Col, Alert, Container, Label, Form, Spinner } from "reactstrap"
import CarouselPage from "./CarouselPage"

import SweetAlert from "react-bootstrap-sweetalert"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { updateUserPass } from "store/actions"
import { useDispatch } from "react-redux"

import Logo from "../../assets/images/images/logo.png";
import { property } from "lodash"

const ForgetPasswordPage = (props) => {

  const dispatch = useDispatch();
  const [{ email }, setEmail] = useState("")
  const [confirm_alert, setconfirm_alert] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [error_dlg, seterror_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const { register, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(props.loading)
  const [emailSent, setEmailSent] = useState(props.emailSent)
  const [error, setError] = useState(props.error)
  // const storeDataOnForm = (event) => {
  //   const { name, value } = event.target;
  //   setEmail(  value  );
  // };

  useEffect(() => {
    if(props.error !== undefined){
      setError(props.error)
    }
  }, [props.error])

  useEffect(()=>{

  },[error])

  useEffect(() => {
    setLoading(props.loading)
  }, [props.loading])

  useEffect(() => { }, [loading])

  useEffect(() => {
    if (props.emailSent !== undefined) {
      setEmailSent(props.emailSent)
    }
  }, [props.emailSent])

  useEffect(() => {
    if (emailSent !== undefined) {
      if (emailSent === true) {
        setsuccess_dlg(true)
        setdynamic_title("Success")
        setdynamic_description("Email to change password has been sent.")
      }
      if (emailSent === false) {
        seterror_dlg(true)
        setdynamic_title("Fail")
        setdynamic_description("Email to change password has not been sent.")

      }
    }
  }, [emailSent])

  const handleEmailInput = (inputEmail) => {
    if (inputEmail.email !== undefined) {

      const data = {
        username: inputEmail.email,
        type: null
      }
      setLoading(true)
      dispatch(updateUserPass(data))
    }
  }
  return (
    <React.Fragment>
      {confirm_alert ?
        <SweetAlert
          title="User Created"
          warning
          showCancel
          confirmButtonText="Confirm"
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="danger"
          onConfirm={() => {
            handleDeleteCustomer();
          }}
          onCancel={() => setconfirm_alert(false)}
        >
          User successfully created. Email notification has been sent to the user.
                    </SweetAlert>
        :
        null}
      {success_dlg ? (
        <SweetAlert
          timeout={1000}
          success
          showConfirm={false}
          title={dynamic_title}
          onConfirm={() => {
            setsuccess_dlg(false)
          }}
        >
          {dynamic_description}
        </SweetAlert>
      ) : null}

      {error_dlg ? (
        <SweetAlert
          error
          title={dynamic_title}
          onConfirm={() => {
            seterror_dlg(false)
          }}
        >
          {dynamic_description}
        </SweetAlert>
      ) : null}
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
                    {emailSent === true ?
                      <div className="p-2 my-auto">
                        <Row className=" ml-1 mb-2">
                          <Label >
                            Please go back to the login page.
                      </Label>
                        </Row>
                        <Row className="form-group mt-4">
                          <Col className="ml-1">

                            <Link to="/login">
                              <button
                                className="btn btn-primary w-md waves-effect waves-light"
                                type="submit"
                              >
                                <i className=" fas fa-arrow-alt-circle-right mr-1" />
                                  Login Page
                              </button>
                            </Link>
                          </Col>
                        </Row>
                      </div>
                      :
                      <div className="p-2 my-auto">
                        <Row className=" ml-1">
                          <Label className="color-primary bold font-size">Welcome</Label>
                        </Row>
                        <Row className="mb-3 ml-1">
                          <Label className="color-white">Enter your email to send password reset link.</Label>
                        </Row>
                        {error !== undefined ? (
                          <Alert color="danger" style={{ marginTop: "13px" }}>
                            {error}
                          </Alert>
                        ) :
                          null}
                        <Form
                          className="form-horizontal mt-4"
                          onSubmit={handleSubmit(handleEmailInput)}
                        >
                          <div className="form-group">
                            <input
                              name="email"
                              label="email"
                              value={email}
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              ref={register({ required: true })}
                            />
                          </div>
                          {loading ?
                            <Row className="spinner-custom mx-auto my-2">
                              <Spinner type="border" className="mr-1" color="primary" />
                            </Row>
                            :
                            <Row className="form-group">
                              <Col className="item-center">

                                <button
                                  className="btn btn-primary w-md waves-effect waves-light"
                                  type="submit"
                                >
                                  Send Email
                       </button>
                              </Col>
                            </Row>}
                        </Form>
                        <div>
                          <Label className="item-center">Remember it? <Link to="/login" className="ml-1"> Sign in here</Link></Label>
                        </div>
                      </div>}

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


const mapStatetoProps = state => {
  return {
    loading: state.Users.loading,
    emailSent: state.Users.email,
    error: state.Users.error
  }
}

export default connect(mapStatetoProps)(ForgetPasswordPage)

