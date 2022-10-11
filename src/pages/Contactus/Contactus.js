import React from "react";
import "./Contactus.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Contactus() {
  return (
    <>
      <Container>
        <Row id="contact1">
          <Col></Col>
          <Col xs={12} md={8} id="contact2">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label id="contact4">First Name</Form.Label>
                  <Form.Control type="text" placeholder="" id="contact3" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label id="contact4">Last Name</Form.Label>
                  <Form.Control type="text" placeholder="" id="contact3" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label id="contact4">Email Address</Form.Label>
                <Form.Control type="email" placeholder="" id="contact3" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label id="contact4">Phone</Form.Label>
                <Form.Control placeholder="" id="contact3" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label id="contact4">Feedback</Form.Label>
                <Form.Control as="textarea" rows={3} id="contact3" />
              </Form.Group>

              <Button variant="primary" type="submit" id="contact5">
                Send
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
