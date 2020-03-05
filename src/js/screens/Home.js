import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import Agency from "../components/Agency/Agency";
import SmoothImage from "../../assets/images/smooth.jpeg";
import StourImage from "../../assets/images/elmsImg1.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* -----basic config-----*/}
        <Parallax
          blur={{ min: -15, max: 25 }}
          bgImage={StourImage}
          bgImageAlt="the cat"
          strength={200}
        >
          <div style={{ height: "520px", width: "100%" }} />
        </Parallax>
        <Agency />
      </div>
    );
  }
}
