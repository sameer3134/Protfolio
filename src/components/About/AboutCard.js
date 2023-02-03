import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">David Daillère </span>
            from <span className="purple"> Angers, France</span>
            <br />I am a Junior Front End Developer, Learning skills every day with CodeCademy to become a FullStack Engineer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Surfing
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Develop and design applications to empower your projects and make a difference"{" "}
          </p>
          <footer className="blockquote-footer">David</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
