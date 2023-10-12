import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./Contact.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    < div id="contacts">
    <section className="contact" >
    <Container>
        <Row>
            <Col>
                <div className="contact-bx">
                    <h2>Contact Me</h2>
                    <div className='disp'>
                    <a className="ca" href="https://github.com/khushj007"><p><GitHubIcon fontSize="large"/> <br/> <p className="detail"> GITHUB </p> </p></a>
                    <a className="ca" href="https://gmail.com"><p><EmailIcon fontSize="large"/> <br/> <p className="detail" > MAIL </p> </p></a>
                    <a className="ca" href="https://www.linkedin.com/in/khush-joshi-b4501724b/"><p><LinkedInIcon fontSize="large"/> <br/> <p className="detail"> LINKEDIN </p> </p></a>
                    </div>
                 </div>
            </Col>
        </Row>
    </Container>
</section>
</div>
  )
}

export default Contact