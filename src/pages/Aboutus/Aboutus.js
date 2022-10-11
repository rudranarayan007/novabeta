import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aboutuscomp from "../../components/Aboutuscomp/Aboutuscomp";
import Footer from "../../components/Footer/Footer";
import { SiMicrostrategy } from "react-icons/si";
import { VscOutput } from "react-icons/vsc";
import { GrUserExpert } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import "./Aboutus.css";
import { apicaller } from "../../utils/api";

function Aboutus() {

  const [getAboutUsData, setGetAboutUsData] = useState([]);
  const [getAboutPara, setGetAboutPara] = useState([]);

  useEffect(() => {
    getAboutUsFunc();
    getAboutParaFunc();
  }, []);

  const getAboutUsFunc = () => {
    apicaller("get-about-us", null, "get", null)
      .then((res) => {
        setGetAboutUsData(res.data.about);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getAboutParaFunc = () => {
    apicaller("get-AboutParagraph", null, "get", null)
      .then((res) => {
        setGetAboutUsData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Container>
        
      <Row>
        {
          getAboutUsData.map((item) => (
              <Col md={3} xs={12}>
                {" "}
                <Aboutuscomp
                  icon={<SiMicrostrategy />}
                  Title={item.title}
                  Text={item.description}
                />{" "}
              </Col>
              /* <Col md={3} xs={12}>
            {" "}
            <Aboutuscomp
              icon={<VscOutput />}
              Title="RESULT"
              Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of "
            />{" "}
          </Col>
          <Col md={3} xs={12}>
            {" "}
            <Aboutuscomp
              icon={<GrUserExpert />}
              Title="EXPERTISE"
              Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of "
            />{" "}
          </Col>
          <Col md={3} xs={12}>
            {" "}
            <Aboutuscomp
              icon={<FaRegLightbulb />}
              Title="SUPPORT"
              Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of "
            />{" "}
          </Col> */
            
          ))
        }
        </Row>
        {/* <Row>
          <Col md={3} xs={12}>
            {" "}
            <Aboutuscomp
              icon={<RiPagesLine />}
              Title="LAB"
              Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of "
            />{" "}
          </Col>
          <Col md={3} xs={12}>
            {" "}
            <Aboutuscomp
              icon={<MdPayment />}
              Title="REPORTS"
              Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of "
            />{" "}
          </Col>
          <Col md={3} xs={12}>
            {" "}
            <Aboutuscomp
              icon={<GrUserExpert />}
              Title="PAYMENT"
              Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of "
            />{" "}
          </Col>
          <Col md={3} xs={12}>
            {" "}
            <Aboutuscomp
              icon={<FaRegLightbulb />}
              Title="BOOKING"
              Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of "
            />{" "}
          </Col>
        </Row> */}
      </Container>
      <Container>
        <Row id="aboutus_whatis">What is Lorem Ipsum?</Row>
        <Row id="aboutus_paragraph">
          {" "}
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.32.
        </Row>
      </Container>
    </div>
  );
}

export default Aboutus;
