import React from 'react';
import Navbarcomp from './Navbarcomp'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { BsFillStarFill, BsArrowRight } from "react-icons/bs";

export default function Navbar () {

    return (
        <>
        <div className="bg-img2">
        <Navbarcomp />
        <Container className="mt-5">
        <Row className="justify-content-md-center">
            <Col md="6">
                <h1><strong>LIVE LIFE TO THE FULLES?</strong></h1>
                <p>Our electric bikes are specifically designed to give you
                  the freedom to enjoy a more active and healthier lifestyle.
                </p>
            </Col>
        </Row>
        <Row className="justify-content-md-end p-5">
            <Col md="2">
              <Button variant="warning" size="md">
                SHOP BIKES <BsArrowRight />
              </Button>
            </Col>
        </Row>
        </Container>
        </div>
        <Container>
        <Row className="justify-content-md-start">
            <Col md="2">
              <h2><strong>BIKE FEATURES</strong></h2>
            </Col>
            <Col md ="12">
              <Card>
                <Card.Img src="http://via.placeholder.com/900x450" alt="Card image" />
                <Card.ImgOverlay>
                  <Row className="justify-content-md-end">
                    <Col md = "4">
                      <Card>
                        <Card.Body>
                          <Card.Title>MOTIONDRIVE SYSTEM</Card.Title>
                          <Card.Text>
                            EVELO MotionDrive is an exclusive electric bike drivetrain technology bringing together the efficiency of 
                            mid-drive motor with the convenience of an internal hub transmission.
                          </Card.Text>
                          <Button variant="danger" size="md">
                            Next
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
              </Card>
            </Col>
        </Row>
        <Row className="mt-5 mb-5">
            <Col md="4">
              <Card>
                <Card.Img src="http://via.placeholder.com/300x200" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>FREE SHIPPING</Card.Title>
                  <Card.Text>
                    Free FedEx shipping anywhere in the continental U.S. Most in-stock orders
                    arrive in 10 business days oe less.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Img src="http://via.placeholder.com/300x200" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>10 DAY AT-HOME TRIAL</Card.Title>
                  <Card.Text>
                    If you don't absolutely love your bike.
                    we'll issue a 100% refund or exchange
                    it for another EVELO product.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Img src="http://via.placeholder.com/300x200" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>4-YEAR/20K-MILE WARRANTY</Card.Title>
                  <Card.Text>
                    We stand by the quality of our products
                    with a 4-year,20.000-mile warranty that 
                    protects your investment.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
        </Row>
        <Card>
          <Row className="justify-content-md-center mt-5">
              <Col md="4">
                <Card className="p-5">
                  <BsFillStarFill color="#F76845" />
                  <p>After much research, I decided on the EVELO Galaxy with the Harmony 
                    transmission and purchased one for my wife for Chrismas.
                    It wasn't long before I had to have the same machine for myself!
                  </p>
                  <h4>BRUSE & MILLIE</h4>
                </Card>
              </Col>
              <Col md={{ span: 4, offset: 1 }}>
                <Image src="http://via.placeholder.com/400x500" rounded />
              </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
              <Col md="4">
                <Image src="http://via.placeholder.com/400x500" rounded />
              </Col>
              <Col md={{ span: 4, offset: 1 }}>
                <div className="p-5">
                  <Button variant="danger" size="md" block>
                    VIEW MORE REVIEWS <BsArrowRight />
                  </Button>
                </div>
              </Col>
          </Row>
          <Row className="mt-5 mb-5">
              <Col md={{ span: 2, offset: 1 }}>
                <Image src="http://via.placeholder.com/150x80" rounded />
              </Col>
              <Col md="2">
                <Image src="http://via.placeholder.com/150x80" rounded />
              </Col>
              <Col md="2">
                <Image src="http://via.placeholder.com/150x80" rounded />
              </Col>
              <Col md="2">
                <Image src="http://via.placeholder.com/150x80" rounded />
              </Col>
              <Col md="2">
                <Image src="http://via.placeholder.com/150x80" rounded />
              </Col>
          </Row>
        </Card>
        <Row className="justify-content-md-center mt-5">
              <Col md="3">
                <Image src="http://via.placeholder.com/300x400" rounded />
              </Col>
              <Col md={{ span: 8, offset: 1 }}>
                <h2>WHAT ARE YOU PLANNING TO USE AN ELECTRIC BIKE FOR?</h2>
              </Col>
        </Row>
        </Container>
        </>
    )
  }