import React from 'react'
import {Row, Col, Container, Jumbotron } from 'react-bootstrap'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ContactPage () {


  return (
    <Container fluid>
      <Row>
        <Col>

          <Jumbotron fluid className="contact-jumbotron" bsPrefix>
            <Container fluid>
              <h1>Let's talk</h1>
              <h4>Just drop as a line (or two) on
                
                
              </h4>
                <Row className="contact-icons"><Col xs lg="2">

                    <a href="mailto:bytesize.meetup@gmail.com">
                    <FontAwesomeIcon style={{ color: 'black' }} icon={['fa', 'envelope']}  size="2x"/>
                </a>
                </Col>
                <Col xs lg="2"> <a  href="https://discord.com/invite/FycPvf6W3e">
                        <FontAwesomeIcon style={{ color: 'black' }} icon={['fab', 'discord']}  size="2x"/>
                    </a>
                 </Col>
                 <Col xs lg="2"> <a  href="https://twitter.com/ByteSizeEvents">
                        <FontAwesomeIcon style={{ color: 'black' }} icon={['fab', 'twitter']}  size="2x"/>
                    </a>
                 </Col>

                <Col  xs lg="2" >
                    
                    <a  href="https://www.linkedin.com/company/bytesizeevents">
                        <FontAwesomeIcon style={{ color: 'black' }} icon={['fab', 'linkedin']}  size="2x"/>
                    </a>
                    
                
                </Col>
                <Col xs lg="2">

                    <a href="https://www.instagram.com/bytesizeevents/">
                    <FontAwesomeIcon style={{ color: 'black' }} icon={['fab', 'instagram']}  size="2x"/>
                </a>
                </Col>
                
    
        
                </Row>
             </Container>
             
            </Jumbotron></Col>
                   <img 
                        
                        src="/images/contact.jpg"
                        alt="Drawing of a mobile phone and floating letters"
                        width = {600}
                        height = {500}
                        sizes="(max-width: 900px) 50px"
                        className="contact-image"
                  />
        </Row>
      </Container>
  )
}
