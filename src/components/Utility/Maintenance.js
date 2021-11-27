import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"

//Import Cards
import CardMaintenance from "./CardMaintenance"

//Import Images
import maintenance from "../../assets/images/maintenance.png"
import logo from "../../assets/images/logo-dark.png"

const PagesMaintenance = () => {
  return (
    <React.Fragment>
      <section className="my-5 pt-sm-5">
        <Container>
          <Row>
            <Col xs="12" className="text-center">
              <div className="home-wrapper">
                <div className="mb-5">
                <div className="d-flex justify-content-center" > 
                        
                        <img
                          src="/logo_blue.png"
                          alt="PayAllLink Logo"
                          className="img-fluid"
                          height="200"
                  
                        />
                </div>
                </div>

                <Row className="justify-content-center">
                  <Col sm={4}>
                    <div className="maintenance-img">
                      <img
                        src={maintenance}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                </Row>
                <h3 className="mt-5">Site is Under Maintenance</h3>
                <p>Please check back in sometime.</p>

                <Row>
                  <CardMaintenance >
                    <i className="bx bx-broadcast mb-4 h1 text-primary"/>
                    <h5 className="font-size-15 text-uppercase">
                     <b>Why is the Site Down?</b> 
                    </h5>
                    <p className="text-muted mb-0">
                     Sorry for the inconvenience but we're performing some maintenance at the moment. If you need to, you can always contact us, otherwise we'll be back online shortly!
                    </p>
                  </CardMaintenance>

                  <CardMaintenance >
                    <i className="bx bx-time-five mb-4 h1 text-primary"/>
                    <h5 className="font-size-15 text-uppercase">
                      <b>What is the Downtime?</b>
                    </h5>
                    <p className="text-muted mb-0">
                      5 hours
                    </p>
                  </CardMaintenance>

                  <CardMaintenance >
                    <i className="bx bx-envelope mb-4 h1 text-primary"/>
                    <h5 className="font-size-15 text-uppercase">
                     <b>Do you need Support?</b> 
                    </h5>
                    <p className="text-muted mb-0">
                     For urgent cases please send an email to <br></br>
                      <Link
                        to="mailto:helpdesk@amadeus.qa"
                        className="text-decoration-underline"
                      >
                        helpdesk@amadeus.qa
                      </Link>
                    </p>
                  </CardMaintenance>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default PagesMaintenance
