import React, { useState } from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./SignupWithOtpModal.css";
import logo from "../../assets/novalogo.png";
import OtpModal from "../OtpModal/OtpModal";

export default function SignupWithOtpModal(props) {
  const [otpShow, setOtpShow] = useState(false);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton id="swom1">
          {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div id="sowm3">Hi</div>
          <div id="swom4">Please enter your mobile number to login</div>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="+91" id="swom5" />
                </Form.Group>
              </Form>
            </Col>
            <Col id="swom6">
              
              <BsArrowRightCircleFill id="swom5" onClick={()=>setOtpShow(true)} />
              
              <OtpModal
                    show={otpShow}
                    onHide={() => setOtpShow(false)}
                  />
            </Col>
          </Row>
          <Row>
            <Col>
              <div id="swom7"></div>
            </Col>
            <Col></Col>
          </Row>
          <div id="swom8">
            OTP will be sent to this number by SMS and whatsapp
          </div>
          <Form>
            {["checkbox"].map((type) => (
              <div key={type} className="mb-3">
                <Form.Check
                  type={type}
                  id={`check-api-${type}`}
                  style={{ borderColor: "#394E76" }}
                >
                  <Form.Check.Input
                    type={type}
                    isValid
                    style={{ backgroundColor: "#394E76" }}
                  />
                  <Form.Check.Label
                    style={{ color: "#394E76" }}
                  >{`By signin up , I agree to the Privacy policy , terms & condition of
 ${type}`}</Form.Check.Label>
                </Form.Check>
              </div>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer id="swom2">
          <Image src={logo} alt="img" style={{ height: "3rem" }} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
