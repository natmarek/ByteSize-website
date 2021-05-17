import Image from 'next/image'
import React, { useState } from 'react';

import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
  <Navbar bg="light" expand="lg" className="navbar-default">
        <Navbar.Brand href="/" className="navbar-brand">
          <img
            alt="logo"
            src="/images/ByteSize.png"
            width="70"
            height="70"
            className="logo"
          
          /> 
          {" "}
          ByteSize
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" className="navbar-link navbar-item">Home</Nav.Link>
              <Nav.Link href="/about" className="navbar-link navbar-item">About</Nav.Link>
              {/* <Nav.Link href="/blog" className="navbar-item">Blog</Nav.Link> */}
              {/* <Nav.Link href="/resources" className="navbar-link navbar-item">Resources</Nav.Link> */}
              <Nav.Link href="/contact" className="navbar-link navbar-item">Contact us</Nav.Link>
            </Nav>
            <Form inline>
              {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
              <Button variant="info" className="navbar-link" href="https://www.eventbrite.co.uk/o/bytesize-31554287601" >Next event</Button>
            </Form>
          </Navbar.Collapse>
    </Navbar>
    
    </div>
  );
}

export default Header