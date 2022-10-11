import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import emoji from "../../assets/emogi.jpeg";
import "./UserProfile.css";
import { BsArrowRight } from "react-icons/bs";
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";

export default function UserProfile() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col xs={2} md={2} id="up5">
            <Image src={emoji} alt="image" id="up1" />
          </Col>
          <Col xs={8} md={8} id="up5">
            <div id="up2">Hi, Codekartians</div>
            <div id="up3">
              Always caring about your health, we are here to help you!
            </div>
          </Col>
          <Col xs={2} md={2} id="up5">
            <Button id="up4" onClick={() => setModalShow(true)}>
              Edit
            </Button>
            <EditProfileModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "1rem" }}>
          <Col xs={2} md={2}></Col>
          <Col xs={8} md={8}>
            <Button id="up4">
              Book a Lab Test{" "}
              <BsArrowRight
                style={{ marginLeft: "2rem", height: "1.5em", width: "1.5em" }}
              />
            </Button>
          </Col>
          <Col xs={2} md={2}></Col>
        </Row>
        <Row style={{ marginTop: "2rem" }}>
          <Col xs={12} md={6}>
            <div id="up6">Personal Details</div>
            <div id="up7">Name : Rudra Narayan Dash</div>
            <div id="up7">UID : 23432 3423 32423 </div>
            <div id="up7">Gender : Male </div>
            <div id="up7">Contact no : +91 8249072512 </div>
            <div id="up7">Email Id : rd43057@gmail.com </div>
            <div id="up7">DOB : 28th May 2000</div>
          </Col>
          <Col xs={12} md={6}>
            <div id="up6">Booking Shedules</div>
            <div id="up7">
              YourBlood Test is sheduled to{" "}
              <span id="up9">Date: 22-07-2022 7.30AM</span> morinng{" "}
            </div>
            <div id="up7">
              Your Urine Test is sheduled to{" "}
              <span id="up9">Date: 22-07-2022 9.30AM </span> morinng{" "}
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "2rem" }}>
          <div id="up6">My Orders</div>
          <Col>
            <Row>
              <Col xs={7} md={7} id="up8">
                Blood Test Report slot-05, Dated 28/07/2022- 10.00AM{" "}
              </Col>
              <Col xs={3} md={3} id="up7">
                Completed
              </Col>
              <Col xs={2} md={2} id="up8">
                Details
              </Col>
            </Row>
            <Row>
              <Col xs={7} md={7} id="up8">
                Blood Test Report slot-05, Dated 28/07/2022- 10.00AM{" "}
              </Col>
              <Col xs={3} md={3} id="up7">
                Completed
              </Col>
              <Col xs={2} md={2} id="up8">
                Details
              </Col>
            </Row>
            <Row>
              <Col xs={7} md={7} id="up8">
                Blood Test Report slot-05, Dated 28/07/2022- 10.00AM{" "}
              </Col>
              <Col xs={3} md={3} id="up7">
                Completed
              </Col>
              <Col xs={2} md={2} id="up8">
                Details
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
