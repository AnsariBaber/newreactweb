import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/image/ba3.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        namepage="Wellcom to About page"
        visit="/service"
        imgsrc={web}
        btnnme="Contact Now"
      />
    </>
  );
};

export default About;
