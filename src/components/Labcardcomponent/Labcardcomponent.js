import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Labcardcomponent.css";
import microscope from "../../assets/microscopeicon.png";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiBuilding } from "react-icons/bi";
import { RiTestTubeLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Labcard(props) {
  return (
    <Container>
      <Row>
        <Col id="labcard1">
          <Row>
            <Col md={8} xs={12} id="labcard2">
              <img src={microscope} id="labcardimg" />
              {props.Dignosticsname}
            </Col>
            <Col md={1}></Col>
            <Col md={3} xs={12} id="labcard3">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </Col>
          </Row>

          <Row id="labcard4">
            <Col>
              <AiOutlineFieldTime id="icon1" />
              {props.timeopening} - {props.timeclosing} | {props.week}
            </Col>
          </Row>

          <Row id="labcard4">
            <Col>
              <div>
                <div id="labcard7">
                  <RiTestTubeLine id="icon1" />
                  Available test
                </div>
                <div id="labcard5">{props.testtype}</div>
              </div>
            </Col>
            <Col md={2} xs={3} id="labcardviewbutton">
              <div><Link to="/labdetails" id="labcard8">View</Link></div>
            </Col>
          </Row>

          <Row id="labcard4">
            <Col xs={12} md={8}>
              <div>
                <BiBuilding id="icon1" />
                Facilites
              </div>
              <div id="labcard5">Female technician, Newborn</div>
              <div id="labcard5"> technician, Parking, Power backup,</div>
              <div id="labcard5">Wash room, wheel chair , Seating </div>
              <div id="labcard5">capacity: 45</div>
            </Col>
            <Col xs={7} md={1}></Col>
            <Col md={3} xs={5} id="labcard6">
              <div id="labcardlocbuttion">
                <GiEarthAfricaEurope id="earthicon" />
                Locate
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
