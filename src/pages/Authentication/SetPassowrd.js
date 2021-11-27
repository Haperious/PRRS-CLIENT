import React, { useState, useEffect } from "react"
import { Row, Col, Alert, Card, CardBody, Container, Label, Form, Spinner } from "reactstrap"
import CarouselPage from "./CarouselPage"
// Redux
import { connect } from "react-redux"
// action
import { updateNewUserPass } from "../../store/actions"

import Logo from "../../assets/images/images/logo.png";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import SweetAlert from "react-bootstrap-sweetalert"
import { Link } from "react-router-dom"

function SetPassowrd(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(props.loading)
  const [{ email, token, password, confirmPassword, passwordMisMatch, userPasswordSet,oldPassword }, setNewUserDetails] = useState({
    email: props.match.params.email,
    token: props.match.params.token,
    password: "",
    confirmPassword: "",
    passwordMisMatch: false,
    userPasswordSet: false
  })
  const [confirm_alert, setconfirm_alert] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [error_dlg, seterror_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")

  useEffect(() => { }, [passwordMisMatch])
  useEffect(() => {
    setLoading(props.loading)
  }, [props.loading])


  useEffect(() => {
    // setNewUserPass(props.userPasswordSet)
    if (props.userPasswordSet === true) {
      setNewUserDetails(userDetails => ({
        ...userDetails,
        userPasswordSet: true
      }))
      setsuccess_dlg(true);
      setdynamic_title("Password Set");
      setdynamic_description("Password has been set. Please go back to login screen.");
    }

    if (props.userPasswordSet === false) {
      seterror_dlg(true);
      setdynamic_title("Password Not Set");
      setdynamic_description("Token Expired or wrong User details.");
    }
  }, [props.userPasswordSet])

  useEffect(() => {
  }, [userPasswordSet])

  const storeDataOnForm = (event) => {
    const { name, value } = event.target;
    setNewUserDetails(formRequest => (
      { ...formRequest, [name]: value }
    ));
  };

  const handleChangePassword = (data) => {

    setNewUserDetails(formRequest => (
      {
        ...formRequest,
        passwordMisMatch: false
      }
    ));
    const resetPassword = {
      Email: email,
      token: token,
      Password: password,
      OldPassword: null
    }
    if (password === confirmPassword) {

      dispatch(updateNewUserPass(resetPassword))
    }
    else {
      setNewUserDetails(formRequest => (
        {
          ...formRequest,
          passwordMisMatch: true
        }
      ));

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
                    <div className="p-2 my-auto">
                      <Row className=" ml-1 ">
                        <Label className="color-white bold font-size">Hello {email}</Label>
                      </Row>
                      {userPasswordSet ? null :
                        <Row className="mb-3 ml-1">
                          <Label className="color-white">Please enter new password.</Label>
                        </Row>}
                      {passwordMisMatch ? (
                        <Alert color="danger" style={{ marginTop: "13px" }}>
                          Password mismatch.
                        </Alert>
                      ) : null}

                      {userPasswordSet ?
                        <>
                          <Row className=" ml-1 mb-2 item-center">
                            <Label className="item-center">
                              Please go back to the login page.
                      </Label>
                          </Row>
                          <Row className="form-group mt-4 ">
                            <Col className="ml-1 item-center">

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
                        </>
                        :
                        <Form
                          className="form-horizontal mt-4"
                          onSubmit={handleSubmit(handleChangePassword)}
                        >
                          <div className="form-group">
                            <input
                              name="password"
                              label="Password"
                              value={password}
                              className="form-control"
                              placeholder="Enter new password"
                              type="password"
                              ref={register({ required: true })}
                              onChange={(event) => storeDataOnForm(event)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              name="confirmPassword"
                              label="confirmPassword"
                              value={confirmPassword}
                              className="form-control"
                              placeholder="Enter new password"
                              type="password"
                              ref={register({ required: true })}
                              onChange={(event) => storeDataOnForm(event)}
                            />
                          </div>
                          {loading ?
                            <Row className="spinner-custom mx-auto my-auto">
                              <Spinner type="border" className="mr-1" color="primary" />
                            </Row>
                            :
                            <Row className="form-group">
                              <Col className="item-center">

                                <button
                                  className="btn btn-primary w-md waves-effect waves-light"
                                  type="submit"
                                >
                                  Set Password
                         </button>
                              </Col>
                            </Row>}
                        </Form>
                      }
                      <div>
                      <Label className="item-center">Remember it? <Link to="/login" className="ml-1"> Sign in here</Link></Label>
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
const mapStateToProps = state => {
  return {
    loading: state.Users.loading,
    userPasswordSet: state.Users.newUserPassord,
  }
}

export default connect(mapStateToProps)(SetPassowrd)
