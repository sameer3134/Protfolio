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
            from <span className="purple"> Angers, France</span>.
            <br />
            I'm a junior front-end developer. When I'm not busy working on a project, I like to learn new skills on CodeCademy. My end goal is to become a Full-Stack engineer.
            <br />
            <br />
            I share my time between France and Sri Lanka,
            I like to get up early and start the day surfing, exercising or just taking a walk. Once back home and full of oxygen, I like to stretch, have a cup of coffee and start working :)
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

          <p style={{ color: "#a4e7ff" }}>
            "Develop and design applications to empower projects and make a difference"{" "}
          </p>
          <footer className="blockquote-footer">David D.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
