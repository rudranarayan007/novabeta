import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import "./Checkout.css";
import { BsDashCircleFill } from "react-icons/bs";
import { RiHandCoinFill } from "react-icons/ri";
import { IoArrowUndoOutline } from "react-icons/io5";

export default function Checkout() {
  return (
    <>
      <Container>
        <Button id="check18">
          <IoArrowUndoOutline /> Back
        </Button>
        <Row>
          <Col>
            <div id="check1">
              <Row>
                <Col></Col>
                <Col xs={10} md={10}>
                  <div id="check17">
                    <Row>
                      <Col xs={4} md={6} id="check20">
                        Rudra 22, Male
                      </Col>
                      <Col xs={8} md={6} id="check21">
                        {" "}
                        3 tests included | ₹ 900
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col></Col>
              </Row>

              {/* <Row id="check7">
                <Col>Blood Test</Col>
              </Row> */}
              <Row>
                <Col id="check8">
                  <BsDashCircleFill id="test7" />2 tests included
                </Col>
                <Col id="check8">
                  <BsDashCircleFill id="test7" />
                  Reports within 12hrs
                </Col>
                <Col id="check8">
                  <BsDashCircleFill id="test7" />
                  No fasting is required
                </Col>
              </Row>
              {/* <Row>
                <Col>
                  <div id="check4">
                    MRP <div id="check2">₹ 380</div>{" "}
                    <div id="check3">19% off</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div id="check5">₹ 300</div>
                </Col>
              </Row> */}
              <Row>
                <Col id="check19">
                  <Table striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Test Type</th>
                        <th>Test Name</th>
                        <th>Test Price</th>
                        <th>Discount</th>
                        <th>Amount Payable</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Blood</td>
                        <td>Haemoglobin</td>
                        <td>380</td>
                        <td>19%</td>
                        <td>300</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Blood</td>
                        <td>Plasma</td>
                        <td>380</td>
                        <td>19%</td>
                        <td>300</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Blood</td>
                        <td>Sugar</td>
                        <td>380</td>
                        <td>19%</td>
                        <td>300</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              <hr />
              <div id="checkout25">Select Appointment Date</div>
              <Row id="checkout24">
                <Col xs={12} md={12}>
                  <div id="check22">
                    <div id="check23">1</div>
                    <div id="check23">2</div>
                    <div id="check23">3</div>
                    <div id="check23">4</div>
                    <div id="check23">5</div>
                    <div id="check23">6</div>
                    <div id="check23">7</div>
                    <div id="check23">8</div>
                    <div id="check23">9</div>
                    <div id="check23">10</div>
                    <div id="check23">11</div>
                    <div id="check23">12</div>
                    <div id="check23">13</div>
                    <div id="check23">14</div>
                    <div id="check23">15</div>
                    <div id="check23">16</div>
                    <div id="check23">17</div>
                    <div id="check23">18</div>
                    <div id="check23">19</div>
                    <div id="check23">20</div>
                    <div id="check23">21</div>
                    <div id="check23">22</div>
                    <div id="check23">23</div>
                    <div id="check23">24</div>
                    <div id="check23">25</div>
                    <div id="check23">26</div>
                    <div id="check23">27</div>
                    <div id="check23">28</div>
                    <div id="check23">29</div>
                    <div id="check23">30</div>
                    <div id="check23">31</div>
                  </div>
                </Col>
              </Row>

              <div id="checkout25">Select Appointment Time</div>

              <Row id="checkout24">
                <Col xs={12} md={12}>
                  <div id="check22">
                    <div id="check23">1</div>
                    <div id="check23">2</div>
                    <div id="check23">3</div>
                    <div id="check23">4</div>
                    <div id="check23">5</div>
                    <div id="check23">6</div>
                    <div id="check23">7</div>
                    <div id="check23">8</div>
                    <div id="check23">9</div>
                    <div id="check23">10</div>
                    <div id="check23">11</div>
                    <div id="check23">12</div>
                    <div id="check23">13</div>
                    <div id="check23">14</div>
                    <div id="check23">15</div>
                    <div id="check23">16</div>
                    <div id="check23">17</div>
                    <div id="check23">18</div>
                    <div id="check23">19</div>
                    <div id="check23">20</div>
                    <div id="check23">21</div>
                    <div id="check23">22</div>
                    <div id="check23">23</div>
                    <div id="check23">24</div>
                  </div>
                </Col>
              </Row>

              <Row id="check11">
                <Col md={4} xs={12}>
                  TOTAL CHARGES
                </Col>
                <Col></Col>
              </Row>

              <Row id="check12">
                <Col md={2} xs={6}>
                  TOTAL MRP
                </Col>
                <Col md={2} xs={6}>
                  ₹ 300.00
                </Col>
                <Col></Col>
              </Row>

              <Row id="check12">
                <Col md={2} xs={6}>
                  Discount
                </Col>
                <Col md={2} xs={6}>
                  ₹ 300.00
                </Col>
                <Col></Col>
              </Row>

              {/* <Row id="check12">
                <Col md={2} xs={6}>
                  TOTAL CHARGES
                </Col>
                <Col md={2} xs={6}>
                  ₹ 300.00
                </Col>
                <Col></Col>
              </Row> */}

              <Row id="check12">
                <Col md={2} xs={6}>
                  Amount To Pay
                </Col>
                <Col md={2} xs={6}>
                  ₹ 300.00
                </Col>
                <Col></Col>
              </Row>

              <Row id="check15">
                <Col id="check13">
                  <RiHandCoinFill id="check16" />
                  You saved ₹30 on this booking
                </Col>
                <Col md="7"></Col>
                <Col md="2" id="check14">
                  PAY
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
