import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Labcard from "../../components/Labcardcomponent/Labcardcomponent";
import "./Lab.css";

export default function Lab() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Form.Control
            id="searchbar"
            type="search"
            placeholder="&#128269; Search for a lab"
            className="me-2"
            aria-label="Search"
          />
        </Col>
      </Row>

      <Row>
        <Col md={6} xs={12}>
          <Labcard
            Dignosticsname="RAJDHANI DIAGNOSTICS"
            timeopening="7AM"
            timeclosing="7.30PM"
            week="Wednesday"
            testtype="Pathology"
          />
        </Col>
        <Col md={6} xs={12}>
          <Labcard
            Dignosticsname="RAJDHANI DIAGNOSTICS"
            timeopening="7AM"
            timeclosing="7.30PM"
            week="Wednesday"
            testtype="Pathology"
          />
        </Col>
        <Col md={6} xs={12}>
          <Labcard
            Dignosticsname="RAJDHANI DIAGNOSTICS"
            timeopening="7AM"
            timeclosing="7.30PM"
            week="Wednesday"
            testtype="Pathology"
          />
        </Col>
        <Col md={6} xs={12}>
          <Labcard
            Dignosticsname="RAJDHANI DIAGNOSTICS"
            timeopening="7AM"
            timeclosing="7.30PM"
            week="Wednesday"
            testtype="Pathology"
          />
        </Col>
        <Col md={6} xs={12}>
          <Labcard
            Dignosticsname="RAJDHANI DIAGNOSTICS"
            timeopening="7AM"
            timeclosing="7.30PM"
            week="Wednesday"
            testtype="Pathology"
          />
        </Col>
        <Col md={6} xs={12}>
          <Labcard
            Dignosticsname="RAJDHANI DIAGNOSTICS"
            timeopening="7AM"
            timeclosing="7.30PM"
            week="Wednesday"
            testtype="Pathology"
          />
        </Col>
      </Row>

      <Row>
        <Col></Col>
        <Col md={2}>
          <div id="lab1">Show More</div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
