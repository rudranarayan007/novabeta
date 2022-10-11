import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import footerlogo from "../../assets/Images/footerlogo.png";
import { IoLogoTwitter } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <Container fluid className="footer_bg">
        <Container>
          <Row style={{ paddingBottom: "1rem" }}>
            <Col md={1} xs={0}></Col>
            <Col md={2} xs={12}>
              {" "}
              <Row>
                <Link to="/">
                  <img
                    src={footerlogo}
                    style={{ width: "60%", marginTop: "1.8rem" }}
                  />
                </Link>
              </Row>
              <Row>&nbsp;</Row>
              <Row id="footer_icondiv">
                <Col id="footer_socialicons">
                  <a href="https://twitter.com/i/flow/login" target="_blank">
                    <IoLogoTwitter style={{ color: "#36DFEE" }} />
                  </a>

                  <a href="https://www.instagram.com/" target="_blank">
                    <FiInstagram
                      style={{ color: "#36DFEE", marginLeft: "1rem" }}
                    />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <BsFacebook
                      style={{ color: "#36DFEE", marginLeft: "1rem" }}
                    />
                  </a>
                  <Link to="/contact">
                    <FiPhoneCall
                      style={{ color: "#36DFEE", marginLeft: "1rem" }}
                    />
                  </Link>
                </Col>
              </Row>

              <Row className="footertext_green"> About us</Row>
              <Row className="footertext_green"> News</Row>
              <Row className="footertext_green"> Career</Row>
            </Col>
            <Col md={2} xs={6}>
              {" "}
              <Row className="footer_heading"> FAQs </Row>
              <Row className="footertext_green"> About us</Row>
              <Row className="footertext_green"> News</Row>
              <Row className="footertext_green"> Career</Row>
            </Col>
            <Col md={2} xs={6}>
              {" "}
              <Row className="footer_heading"> Resources</Row>
              <Row className="footertext_green"> About us</Row>
              <Row className="footertext_green"> News</Row>
              <Row className="footertext_green"> Career</Row>

            </Col>
            <Col md={2} xs={6}>
              {" "}
              <Row className="footer_heading"> Quick Links </Row>
              <Row>
                <Link to="/lab" className="footertext_green">
                  Lab
                </Link>
              </Row>
              <Row>
                <Link to="/promotion" className="footertext_green">
                  Promotion & discounts
                </Link>
              </Row>
              <Row><Link to="/faq" className="footertext_green">FAQ</Link></Row>
            </Col>
            <Col md={2} xs={12}>
              {" "}
              <Row className="footer_heading"> About Nova</Row>
              <Row>
                <Link to="/about" className="footertext_green">
                  About Us
                </Link>
              </Row>
              <Row>
                <Link to="/news" className="footertext_green">
                  News
                </Link>
              </Row>
              <Row>
                <Link to="/career" className="footertext_green">
                  Career
                </Link>
              </Row>
            </Col>
            <Col md={2} xs={12}>
              {" "}
              <Row className="footer_heading">Legal</Row>
              <Row>
                <Link to="/locate" className="footertext_green">
                  Locate Us
                </Link>
              </Row>
              <Row>
                <Link to="terms" className="footertext_green">
                  Terms & Conditions
                </Link>
              </Row>
              <Row className="footertext_green">Privacy Policies</Row>
            </Col>
            <Col md={2} xs={6}>
              {" "}
              <Row className="footer_heading"> Contact Us </Row>

              <Row className="footertext_green"> About us</Row>
              <Row className="footertext_green"> News</Row>
              <Row className="footertext_green"> Career</Row>
         
            </Col>
         
            <Col md={1} xs={0}></Col>
            <Row id="footer_icondiv">
                <Col id="footer_socialicons">
                  <IoLogoTwitter style={{ color: "#36DFEE" }} />

                  <FiInstagram
                    style={{ color: "#36DFEE", marginLeft: "1rem" }}
                  />
                  <BsFacebook
                    style={{ color: "#36DFEE", marginLeft: "1rem" }}
                  />
                  <FiPhoneCall
                    style={{ color: "#36DFEE", marginLeft: "1rem" }}
                  />
                </Col>

              <Row className="footertext_green">
                Kanan Vihar, Phase - II Lane -1 , First Floor, Bhubaneswar,
                Odisha +91 2324 3434 32, +91 7008 334 4343

              </Row>
          </Row>
          </Row>
        </Container>
      </Container>
      <Container fluid className="footer_copyrights">
        {/* <Row className='shortlink'>
    <Col md={3} xs={0}></Col>
    <Col md={2} xs={12}>Privacy Statement</Col>
    <Col md={2} xs={12}>Terms of use</Col>
    <Col md={2} xs={12}>Notice of Descrimnation</Col>
    <Col md={3} xs={0}></Col>
</Row> */}
        <Row className="copyright_text">
          {" "}
          © 2022 All right Reserved by NOVA Prolabs | Designed by Codekart
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
