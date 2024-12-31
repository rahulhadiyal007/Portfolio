import React from "react";
import { TypeAnimation } from "react-type-animation";

function Type() {
  return (
    <TypeAnimation
      sequence={[
        'Software Developer',
        1000, // wait 1s
        'Freelancer',
        1000,
        'MERN Stack Developer',
        1000,
        'Open Source Contributor',
        1000,
      ]}
      speed={50} // typing speed
      style={{ fontSize: '2em', color: '#4A90E2' }}
      repeat={Infinity} // loop indefinitely
    />
  );
}

export default Type;