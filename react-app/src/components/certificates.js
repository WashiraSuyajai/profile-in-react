import React, { Component } from "react";
import styled from "styled-components";
import htmlCert from "../components/certificate-pics/html-fundamental.JPG";
import pythonCert from "../components/certificate-pics/python-for-data-science.jpg";
import bigdataCert from "../components/certificate-pics/data-bigdata.JPG";
import reactCert from "../components/certificate-pics/react-at-futureskill.jpg";
import technicalCert from "../components/certificate-pics/technical-support-fundamentals.jpg";

class Certificates extends Component {
  render() {
    const Image = styled.img`
      margin-top: 20px;
      margin-left: 2.5vw;
      margin-right: 2.5vw;
      margin-bottom: 20px;
      width: 300px;
      height: auto;
      border: 1px solid red;
    `;
    return (
      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: "5vw" }}>
          My Certificates
        </h1>

        <h3 style={{ marginTop: "5vw" }}>The Programming Languages</h3>
        <div className="row">
          <Image classNane="" src={htmlCert} />
          <Image classNane="" src={pythonCert} />
        </div>
        <h3 style={{ marginTop: "2.5vw" }}>The Web Application Skill</h3>
        <div className="row">
          <Image classNane="" src={reactCert} />
        </div>
        <h3 style={{ marginTop: "2.5vw" }}>Data Analytic and Bigdata</h3>
        <div className="row">
          <Image classNane="" src={bigdataCert} />
        </div>
        <h3 style={{ marginTop: "2.5vw" }}>Other Course I've learned</h3>
        <div className="row">
          <Image classNane="" src={technicalCert} />
        </div>
      </div>
    );
  }
}

export default Certificates;
