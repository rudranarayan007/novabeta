import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Homecompfour.css";
import doc from "../../assets/Images/doctorimg.png";
import People from "../../assets/Images/Peoplecard.png";
import { apicaller } from "../../utils/api";
function Homecompfour() {
  const [chooseUsData, setChooseUsData] = useState([]);

  useEffect(() => {
    getWhyChooseUsData();
  }, []);

  const getWhyChooseUsData = () => {
    apicaller("get-why-choose-us", null, "get", null)
      .then((res) => {
        setChooseUsData(res.data.WhyChooseUs);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Container fluid className="Homecompfour_bg">
        <Container>
          <Row>
            <Col md={5} xs={12}>
              {" "}
              <img src={doc} style={{ width: "100%" }} />{" "}
            </Col>
            <Col md={7} xs={12}>
              <Row className="Homecompfour_whychoose">WHY CHOOSE US </Row>
              <Row className="Homecompfour_whatmakes">
                What Makes Nova Health <br />
                Services Unique?
              </Row>
              {/* {chooseUsData.map((item) => (
              <Row className="Homecompfour_description">
                <Col md={4} style={{ color: "#1e1e1e" }}>
                  {" "}
                  {item.title}
                </Col>
                <Col md={8}>
                  {" "}
                  {item.description}
                </Col>
              </Row>
              ))} */}

              <Row className="Homecompfour_description">
                <Col md={4} style={{ color: "#1e1e1e" }}>
                  {" "}
                  Caring Commitment
                </Col>
                <Col md={8}>
                  {" "}
                  We take our commitment to be your health care partner
                  seriously. As primary care providers
                </Col>
              </Row>

              <Row className="Homecompfour_description">
                <Col md={4} style={{ color: "#1e1e1e" }}>
                  {" "}
                  Great Facilities
                </Col>
                <Col md={8}>
                  {" "}
                  Our building design, furnishings, and equipment are all
                  selected to promote and aid in health and healing.
                </Col>
              </Row>
            </Col>
            <Col> </Col>
          </Row>
        </Container>
        <Container className="Homecompfour_formaindiv">
          <Row>
            <Col md={6} xs="">
              <Row id="homecompfour_need">
                {" "}
                NEED SOME ADVICE FROM OUR EXPERTS?
              </Row>
              <Row id="homecompfour_request">
                {" "}
                Request a Call Back <br />
                Today Now!
              </Row>
              <Row id="homecompfour_we">
                We will make a single attempt to contact you from a withheld{" "}
                <br />
                number, usually within 24 hours of your request.
              </Row>
              <Row>
                <Col md={3} id="homecompfour_shorcutimg">
                  {" "}
                  <img src={People} alt="" />
                </Col>
                <Col md={8} id="homecompfour_thequickest">
                  {" "}
                  The quickest way to get in contact is to telephone 03457 30 40
                  30
                </Col>
              </Row>
            </Col>

            <Col md={6} xs="">
              <Row>
                <input
                  type="text"
                  placeholder="Your Name*"
                  id="Homecompfour_input"
                />
                <input
                  type="text"
                  placeholder="Contact number*"
                  id="Homecompfour_input"
                />
                <Form.Control as="textarea" rows={3} placeholder="Reason for Contact*" id="Homecompfour_input1"/>
              </Row>
              <Row id="homecompfour_timingselect">
                <Col md={3} xs={12} id="homecompfour_avail">
                  Your Availability:{" "}
                </Col>
                <Col md={3} xs={4} id="Homecompdour_timing">
                  {" "}
                  9am- 5pm
                </Col>
                <Col md={3} xs={4} id="Homecompdour_timing2">
                  5pm - 12am{" "}
                </Col>
                <Col md={2}> </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <input
                    type="checkbox"
                    id="homecompfour_check"
                    name=""
                    value=""
                  />
                  <label for="" id="homecompfour_label">
                    I have read and accept the Privacy Policy{" "}
                  </label>{" "}
                </Col>
              </Row>
              <Row>
                <Col md={12} id="homecompfour_sendbtnrow">
                  <button id="homecompfour_sendusbtn"> Send</button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Homecompfour;
