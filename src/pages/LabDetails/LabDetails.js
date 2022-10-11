import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./LabDetails.css";
import { TbMicroscope } from "react-icons/tb";
import { BsFillClockFill, BsBuilding } from "react-icons/bs";
import { RiBodyScanFill } from "react-icons/ri";
import { ImLab } from "react-icons/im";
import { FaCity, FaRupeeSign } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Gmap from "../../components/Gmap/Gmap";
import TestCard from "../../components/TestCard/TestCard";

export default function LabDetails() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col id="labdetails1">
            <div>
              <TbMicroscope style={{ height: "3em", width: "3em" }} />
            </div>
            <div>
              <div id="labdetails2">RAJDHANI DIAGNOSTICS</div>
              <div id="labdetails3">
                A/2,RUCHIKA MARKET,BARAMUNDA,BHUBANESWAR 751003
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div id="labdetails4">
              <div id="labdetails7">
                <BsFillClockFill
                  style={{ height: "1.5em", width: "1.5em", color: "#969632" }}
                />
              </div>
              <div>
                <div id="labdetails5">open</div>
                <div id="labdetails6">07.00am - 08.00pm</div>
              </div>
            </div>
            <div id="labdetails4">
              <div id="labdetails7">
                <BsBuilding
                  style={{ height: "1.5em", width: "1.5em", color: "#969632" }}
                />
              </div>
              <div>
                <div id="labdetails5">Center type</div>
                <div id="labdetails6">Collection center</div>
              </div>
            </div>
            <div id="labdetails4">
              <div id="labdetails7">
                <RiBodyScanFill
                  style={{ height: "1.5em", width: "1.5em", color: "#969632" }}
                />
              </div>
              <div>
                <div id="labdetails5">Radiology</div>
                <div id="labdetails6">Not available</div>
              </div>
            </div>
            <div id="labdetails4">
              <div id="labdetails7">
                <ImLab
                  style={{ height: "1.5em", width: "1.5em", color: "#969632" }}
                />
              </div>
              <div>
                <div id="labdetails5">Pathology</div>
                <div id="labdetails6">Available</div>
              </div>
            </div>
            <div id="labdetails4">
              <div id="labdetails7">
                <FaCity
                  style={{ height: "1.5em", width: "1.5em", color: "#969632" }}
                />
              </div>
              <div>
                <div id="labdetails5">Facilities</div>
                <div id="labdetails6">
                  Parking, Power backup, Wash room, Seating capacity:
                </div>
              </div>
            </div>
            <div id="labdetails4">
              <div id="labdetails7">
                <FaRupeeSign
                  style={{ height: "1.5em", width: "1.5em", color: "#969632" }}
                />
              </div>
              <div>
                <div id="labdetails5">Accepted payment method</div>
                <div id="labdetails6">Cash, UPI, POS</div>
              </div>
            </div>
          </Col>
          <Col>
            <div id="labdetails4">
              <div id="labdetails7">
                <IoCall
                  style={{ height: "1.5em", width: "1.5em", color: "#969632" }}
                />
              </div>
              <div>
                <div id="labdetails5">0123456789</div>
                <div id="labdetails6">
                  Contact us for center related information
                </div>
              </div>
            </div>
            <div id="labdetails4">
              <div id="labdetails7">
                <IoIosMail
                  style={{ height: "1.5em", width: "1.5em", color: "#969632" }}
                />
              </div>
              <div>
                <div id="labdetails5">codekart@codekart.com</div>
                <div id="labdetails6">
                  Mail us for any information and queries
                </div>
              </div>
            </div>

            <div>{/* <Gmap /> */}</div>
          </Col>
        </Row>
        <Row style={{marginTop:"2rem"}}>
          <Col>
            <Form.Select size="lg" id="labdetails13">
              <option>Select Test</option>
              <option>Blood Test</option>
              <option>Urine Test</option>
              <option>Plasma Test</option>
              <option>Haemoglobin Test</option>
              <option>Sugar Test</option>
            </Form.Select>
          </Col>
        </Row>
        <Row id="labdetails12">
          <Col id="labdetails11">
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="labdetails8">Value for money</div>
            <div id="labdetails9">
              With exclusive discounts on lab tests and Health Credits worth INR
              100 on every test, we make sure that our lab tests are accessible
              as well as affordable. We also offer flexible modes of payment,
              including cash on delivery (COD). Apollo 24|7 is on a mission to
              provide affordable lab tests at home.
            </div>

            <div id="labdetails10">Professionally Trained Technicians</div>
            <div id="labdetails9">
              Qualified and trained phlebotomists from our NABL certified Apollo
              Diagnostic Labs and collection centres, come to your doorstep to
              collect the samples in a safe, hygienic and hassle-free manner.
              Apollo 24|7 brings the best of Apollo Diagnostics to your home for
              all your diagnostic requirements.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
