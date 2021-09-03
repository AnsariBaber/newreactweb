import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/image/ba2.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        namepage="Grow your Business with"
        visit="/about"
        imgsrc={web}
        btnnme="Get started"
      />
    </>
  );
};

export default Home;
