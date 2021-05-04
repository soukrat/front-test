import React from 'react';
import { Container, Row, Col, Form, Card, Image } from 'react-bootstrap';

export default function Footer () {

    return (
      <Card className="bg-dark text-white mt-5">
      <Card.Body>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md="5" className="bordercolor">
            <Container className="bordercont">
            <Card border="dark" className="bg-dark text-white mt-5">
            <p>PHONE</p>
            <h4>+1877.991.7272</h4>
            </Card>
            <Card border="dark" className="bg-dark text-white mt-5">
            <p>EMAIL</p>
            <h4>info@elevio</h4>
            </Card>
            <Card border="dark" className="bg-dark text-white mt-5">
            <p>FOLLOW US</p>
            <Row>
             <Col md="2">
              <Image src="http://via.placeholder.com/50x40" />
             </Col> 
             <Col md="2">
              <Image src="http://via.placeholder.com/50x40" />
             </Col> 
             <Col md="2">
              <Image src="http://via.placeholder.com/50x40" />
             </Col> 
             <Col md="2">
              <Image src="http://via.placeholder.com/50x40" />
             </Col> 
            </Row>
            </Card>
            </Container >
            <Container>
              <Row className="mt-5">
                <Col md="4">
                  <Image src="http://via.placeholder.com/80x50" />
                </Col>
                <Col md="6">
                  <p>&copy; Copyright 2019 - Elevo. All rights reserved.</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={{ span: 6, offset: 1 }}>
            <Container>
            <Row className="justify-content-md-center mt-5 bordercont">
                <Col md="4">
                  <h5>JOIN OUR NEWSLETTER</h5>
                </Col>
                <Col>
                  <Form.Control type="email" size="lg" placeholder="Your Email Address" />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="justify-content-md-center mt-5">
                <Col>
                  <h5>About</h5>
                  <p>Our Story</p>
                  <p>Blog</p>
                  <p>Contact Us</p>
                  <p>Privacy Policy</p>
                </Col>
                <Col>
                  <h5>Community</h5>
                  <p>Become a Dealer</p>
                  <p>Refferral Program</p>
                  <p>Buyer's Guide</p>
                  <p>Electric Bike Tour</p>
                  <p>E-Bike Friendly Shops</p>
                </Col>
              </Row>
              <Row className="justify-content-md-center mt-5">
                <Col>
                  <h5>Shop</h5>
                  <p>Order an EVELO</p>
                  <p>Accessories</p>
                  <p>Special Offers</p>
                  <p>Free Fit Consultation</p>
                  <p>Open Box & Clearance Bikes</p>
                  <p>Evelo vs. Others</p>
                  <p>Find a Test Ride Location</p>
                </Col>
                <Col>
                  <h5>Support</h5>
                  <p>How Service Works</p>
                  <p>Frequently Asked Questions</p>
                  <p>Shipping Information</p>
                  <p>Easy Assembly</p>
                  <p>Warranty Overview</p>
                  <p>Register Your Warranty</p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      </Card.Body>
      </Card>
    )
  }