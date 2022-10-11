import React, { useState } from "react";
import {
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "./Header.css";
import { GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import logo from "../../assets/novalogo.png";
import ProfileModal from "../ProfileModal/ProfileModal";
import SignupWithOtpModal from "../SignupWithOtpModal/SignupWithOtpModal";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

export default function Header() {
  const [modalShow, setModalShow] = useState(false);
  const [modalSignupShow, setModalSignupShow] = useState(false);

  return (
    <>
      {/* nav bar1 */}
      <Navbar id="header1">
        <Container>
          <Navbar.Brand id="header2">
            Hello, welcome to NOVA Prolabs
          </Navbar.Brand>
          {/* <Form.Select size="sm" id="header3">
            <option>Bhubaneswar</option>
            <option>Cuttack</option>
          </Form.Select> */}
          {/* <Form.Select size="sm" id="header3">
            <option>English</option>
            <option>Hindi</option>
          </Form.Select> */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text id="header2">
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                id="header10"
              >
                <GrTwitter id="header4" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                id="header10"
              >
                <RiInstagramFill id="header4" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" id="header10">
                <FaFacebook id="header4" />
              </a>
              <Link to="/contact" id="header10">
                <MdCall />
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* navbar1 end */}
      {/* navbar2 */}
      <Navbar>
        <Container fluid id="header5">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-center"
                alt="Nova logo"
                id="header6"
              />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* navbar2 end */}
      {/* navbar 3 */}
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand}>
          <Container fluid>
            <Navbar.Brand>&nbsp;</Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              id="header8"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image src={logo} alt="logo" style={{ height: "2rem" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link id="header7">
                    <Link to="/" id="header9">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="header7">
                    <Link to="/lab" id="header9">
                      Lab's
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="header7">
                    <Link to="/contact" id="header9">
                      Contact us
                    </Link>
                  </Nav.Link>
                  {/* <Nav.Link id="header7">Download Reports</Nav.Link> */}
                  <Nav.Link id="header7">
                    <Link to="/about" id="header9">
                      About Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="header7">
                    <Link to="/promotion" id="header9">
                      Promotion & discounts
                    </Link>
                  </Nav.Link>
                  <Nav.Link
                    id="header7"
                    onClick={() => setModalSignupShow(true)}
                  >
                    Signup
                  </Nav.Link>
                  <SignupWithOtpModal
                    show={modalSignupShow}
                    onHide={() => setModalSignupShow(false)}
                  />
                  <Nav.Link id="header7" onClick={() => setModalShow(true)}>
                    Signin
                  </Nav.Link>
                  <ProfileModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <Nav.Link id="header7">
                    <IoMdCart style={{height:"1.5em", width:"1.5em"}}/>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* navbar 3 end */}
    </>
  );
}
