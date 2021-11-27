import React, { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Row, Col, Card, CardBody, Container } from "reactstrap"
import ReactPlayer from 'react-player'
import Video from "../../assets/video/palv2homepage.mp4"


const CarouselPage = () => {
  return (
    <React.Fragment>
      <Col xl={9}>

        <div className="auth-full-bg pt-5" >
          <div className="w-100">
            <div className="bg-overlay" ></div>
            {/* <video width="750"  width='100%'  height='100%' controls autoPlay loop muted >
            <source src="https://res.cloudinary.com/developerqa/video/upload/v1625398660/test/palv2_homepage_eygxkd.wmv" type="video/wmv"/>
            </video> */}

            <div className='player-wrapper'>
              <ReactPlayer
                //  style={{marginTop:"50px"}}
                muted={true}
                loop={true}
                playing={true}
                className='react-player'
                url="https://res.cloudinary.com/developerqa/video/upload/v1625555918/common/hd_hhffjx.mp4"
                width='100%'
                height='auto'
                controls={false}
              />
            </div>

            
            {/* <div className="d-flex h-100 flex-column">
              <div className="py-auto px-auto "> */}
            {/* <Carousel showThumbs={false} className="slider_css bg h-100">
                      <Card className="mx-auto my-auto " style={{ background: "rgba(255, 252, 252, 0.8)" , height:"100%"}}>
                        <CardBody>
                              <iframe
                              // style={{height:"100%", width:"100%"}}
                              src="../../../WorldMap/world.html"
                              // height="800px"
                              // width="100%"
                               className="responsive-iframe "
                            /> 
                             <ResponsiveEmbed src='../../../WorldMap/world.html' allowfullscreen /> 
                           
                        </CardBody>
                      </Card>
                    </Carousel> */}
            {/* </div>
            </div> */}
          </div>
        </div>
      </Col>
    </React.Fragment>
  )
}
export default CarouselPage
