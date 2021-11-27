import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"

//Import Images
import error from "../../assets/images/error-img.png"

const Pages500 = (id) => {
  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <h1 className="display-2 font-weight-medium">
                  5<i className="bx bx-buoy bx-spin text-primary display-3"/>
                  0
                </h1>
                <h4 className="text-uppercase">Internal Server Error</h4><br></br>
                <h3>error code : 5f994f65c17370290476e5ba</h3>
                <p>Submit the code above to helpdesk@amadeus.qa to resolve the issue.</p>
                <div className="mt-5 text-center">
                  <Link
                    className="btn btn-primary waves-effect waves-light"
                    to="/dashboard"
                  >
                    Back to Dashboard
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="8" xl="6">
              <div>
                <img src={error} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Pages500
