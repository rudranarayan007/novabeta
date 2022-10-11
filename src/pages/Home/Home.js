import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Homecardcomp from "../../components/Homecardcomp/Homecardcomp";
import Homecompfive from "../../components/Homecompfive/Homecompfive";
import Homecompfour from "../../components/Homecompfour/Homecompfour";
import HomeImgCarousel from "../../components/HomeImgCarousel/HomeImgCarousel";

import "./Home.css";
function Home() {
  return (
    <>
      <HomeImgCarousel />
      <Container>
        <Row id="homefloat2">
          <div id="homefloat">
            Find a walk-in lab location near you, view hours, make payment and
            make appointments in few clicks.
          </div>
          <Col xs={8} md={8}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="-Enter Address or pincode-" />
            </Form.Group>
          </Col>
          {/* <Col xs={5} md={5}>
            <Form.Select aria-label="Default select example">
              <option> -Select Nearby Lab- </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col> */}
          <Col xs={4} md={4}>
            <Button id="homefloat3">Go</Button>
          </Col>
        </Row>
        <Row className="Homepage_title">
          <Col md="3" xs="0">
            {" "}
          </Col>
          <Col md="6" xs="0">
            {" "}
            Top Rated Labs
          </Col>
        </Row>
        <Row className="Homepage_toprateddesciption">
          <Col md="1" xs="0">
            {" "}
          </Col>
          <Col md="10" xs="0">
            This book is a treatise on the theory of ethics, very popular during
            the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32.{" "}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="Homepage_cardarrange">
          <Col md="3" xs="12">
            {" "}
            <Homecardcomp
              Number="1"
              Labname="Bhubaneswar Testing Lab - 1"
            />{" "}
          </Col>
          <Col md="3" xs="12">
            {" "}
            <Homecardcomp
              Number="2"
              Labname="Bhubaneswar Testing Lab - 2"
            />{" "}
          </Col>
          <Col md="3" xs="12">
            {" "}
            <Homecardcomp
              Number="3"
              Labname="Bhubaneswar Testing Lab - 3"
            />{" "}
          </Col>
          <Col md="3" xs="12">
            {" "}
            <Homecardcomp
              Number="4"
              Labname="Bhubaneswar Testing Lab - 4"
            />{" "}
          </Col>
        </Row>
      </Container>
      <Homecompfour />
      <Homecompfive />
    </>
  );
}

export default Home;
