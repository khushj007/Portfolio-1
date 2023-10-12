import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Data from "./Data"

function Skills() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="kill-slider">
                         <Data title="Node.js" />
                         <Data title="mongo DB"/>
                         <Data title="HTML" />
                         <Data title="CSS"/>
                         <Data title="JavaScript" />
                         <Data title="C++"/>
                         <Data title="Express" />
                         <Data title="Mongoose"/>
                         <Data title="React"/>
                         <Data title="DSA"/>
                         <Data title="MySQL"/>
                        </Carousel>
                     </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Skills