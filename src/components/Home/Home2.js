import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have definitely learned a thing or two along the way…
              <br />
              <br />Fluent in
              <i>
                <b className="purple"> C++, JavaScript, and Python</b>
              </i>
              , I enjoy building
              <i>
                <b className="purple"> modern web applications</b>
              </i>
              {" "}and exploring areas like 
              <i>
                <b className="purple"> cybersecurity and information security.</b>
              </i>
              <br />
              <br />
              I have experience developing &nbsp;
              <i>
                <b className="purple">full-stack applications using React, Node.js, Express.js, and MongoDB, </b> focusing on
                <b className="purple">
                  {" "}UI/UX, performance, and security.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for creating 
              <b className="purple"> scalable and interactive digital products,</b> leveraging modern technologies like 
              <i>
                <b className="purple">
                  {" "}
                  Three.js, Tailwind CSS, and Next.js.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sameekshaagupta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/ayee_sammm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sameeksha-gupta-423b2525a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sameekshaa.gupta/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
