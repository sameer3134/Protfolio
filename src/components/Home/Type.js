import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Junior Front-End Developer",
          "Soon to Become a Full-Stack Engineer",
          "With Java Programming and Software Engineering Skills ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
