import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Homecompfive.css";
import doctor from "../../assets/Images/doc.png";
import Mobile from "../../assets/Images/Mobile.png";
import playstore from "../../assets/Images/playstore.png";
import applestore from "../../assets/Images/applestore.png";
function Homecompfive() {
  return (
    <div>
      <Container>
        <Row lg={12} md={12} xs={12} className="homecompfive_savetime">
          SAVE TIME. FEEL BETTER.
        </Row>
        <Row lg={12} md={12} xs={12} className="homecompfive_skip">
          Skip The Waiting Room! <br />
          Register Online Before You Arrive.
        </Row>

        <Row className="rowthree" style={{ marginTop: "3rem" }}>
          <Col md={1} xs={0}></Col>
          <Col md={4} xs={12}>
            {" "}
            <div id="home_doctorimage2">
              <img src={doctor} alt="" style={{ width: "100%" }} />{" "}
            </div>
          </Col>

          <Col md={6} xs={12}>
            <div className="homecompfive_discover">
              {" "}
              Discover our latest innovations in drug development.
            </div>
            <div className="homecompfive_paragraph">
              {" "}
              We look to the future and work tirelessly to test new drugs,
              treatments and therapies. Labcorp supports the development of
              pharmaceutical products in approximately 100 countries, generating
              more clinical trial data than any other company.
            </div>
            <div className="homecompfive_learnmore"> Learn more..</div>
          </Col>
        </Row>

        <Row className="rowthree" style={{ marginTop: "3rem" }}>
          <Col md={1} xs={0}></Col>
          <Col md={6} xs={12}>
            <div className="homecompfive_discover">
              {" "}
              Discover our latest innovations in drug development.
            </div>
            <div className="homecompfive_paragraph">
              {" "}
              We look to the future and work tirelessly to test new drugs,
              treatments and therapies. Labcorp supports the development of
              pharmaceutical products in approximately 100 countries, generating
              more clinical trial data than any other company.
            </div>
            <div className="homecompfive_learnmore"> Learn more..</div>
          </Col>

          <Col lg={{ order: "last" }} md={4} xs={{ order: "first" }}>
            {" "}
            <img src={doctor} alt="" style={{ width: "100%" }} />{" "}
          </Col>
        </Row>

        <Row>
          <Col md={4} xs={1}>
            {" "}
          </Col>
          <Col md={4} xs={10}>
            <img src={Mobile} style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>

      <Container fluid className="Homecompfive_graddiv">
        <Container>
          <Row className="Homecompfive_Downloadtext">
            DOWNLOAD OUR OFFICIAL APP
          </Row>
          <Row>
            <Col md={2} xs={1}>
              {" "}
            </Col>
            <Col md={4} xs={5}>
              {" "}
              <img src={playstore} style={{ width: "100%" }} />{" "}
            </Col>
            <Col md={4} xs={5}>
              {" "}
              <img
                src={applestore}
                style={{ width: "100%", marginTop: "4px" }}
              />{" "}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Homecompfive;
