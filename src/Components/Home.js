import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap'
import Lottie from "lottie-react";
import bannergif from "../img/bannergif.json"
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <section className="banner" id="home">
    <Container>    
    <Row>
    <Col xs={12} md={6} xl={7}>
    <span className='tagline'>Welcome to my Resume</span>
    <h1>{"Hi i am Khush"}<h1><span className="wrap">I am a
    <h2><Typewriter
    options={{
    strings: ['Computer Science Engineer'],
    autoStart: true,
    loop: true,
  }}/>
  </h2>
</span>
</h1>

</h1>
    <p>I desire to further advance my skills in the domain of Full-Stack Web Development and Data Structures and Algorithms</p>
    </Col>

    <Col xs={12} md={6} xl={5}>
    <Lottie animationData={bannergif} loop={true} />

    </Col>

    </Row>
    </Container>
</section>
  )
}

export default Home;