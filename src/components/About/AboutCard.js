import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sameeksha Gupta </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br /><br/>
            I am currently pursuing a B.Tech in Computer Science at Pandit Deendayal Energy University (PDEU).
            <br /><br/>
            I have a strong passion for full-stack development, cybersecurity, and emerging web technologies. My journey has led me to work with React, Node.js, MongoDB, and Tailwind CSS, building modern and responsive applications.
            <br />
            <br />
            Apart from coding, here are some other things I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Cybersecurity & Ethical Hacking
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons & Coding Competitions
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Striving to build secure and impactful digital solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Sameeksha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
