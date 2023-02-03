import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, my name is <span className="purple">David Daillère </span>
            from <span className="purple"> Angers, France</span>
            <br />
            I'm a junior front-end developer. When I'm not busy working on a project, I love learning new skills on CodeCademy. My end goal is to become an experienced Full-Stack engineer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            🏄 Surfing
            </li>
            <li className="about-activity">
            🥾 Trekking
            </li>
            <li className="about-activity">
            🌏 Travelling
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
