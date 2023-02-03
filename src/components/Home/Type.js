import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End development",
          "FullStack Engineering",
          "Java programming and software engineering ",
          "Visual Studio Code, Netbeans, Eclipse",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
