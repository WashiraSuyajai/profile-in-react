import React, { Component } from "react";
import styled from "styled-components";
import htmlCert from "../certificate-pics/html-fundamental.JPG";
import pythonCert from "../certificate-pics/python-for-data-science.jpg";
import bigdataCert from "../certificate-pics/data-bigdata.JPG";
import reactCert from "../certificate-pics/react-at-futureskill.jpg";
import technicalCert from "../certificate-pics/technical-support-fundamentals.jpg";
import jsCert from "../certificate-pics/JavaScript.JPG";
import deepLearningCert from "../certificate-pics/intro-deep-learning.jpg";
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
        <p
          style={{
            marginTop: "2.5vw",
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "",
          }}
        >
          นี่คือ Course ต่างๆที่ผมได้เรียนมา
          สามารถแบ่งออกเป็นกลุ่มของการเรียนรู้ได้เป็น 4 กลุ่ม ดังนี้
        </p>

        <h3 style={{ marginTop: "5vw" }}>The Programming Languages</h3>
        <div className="row">
          <a href="https://drive.google.com/uc?id=1vrCufQtqZ0wLpihNPjRobIu_JkkTIkE2">
            <Image src={pythonCert} />
          </a>
          <a href="https://www.sololearn.com/Certificate/1024-17008626/pdf/">
            <Image src={jsCert} />
          </a>
          <a href="https://drive.google.com/uc?id=0BxFZD0Lum6qDZGx5Wi1nTlhOR3V6blNMR3c5V25aNjc0OHV3">
            <Image src={htmlCert} />
          </a>
        </div>
        <h3 style={{ marginTop: "2.5vw" }}>The Web Application Skill</h3>
        <div className="row">
          <a href="https://drive.google.com/uc?id=1pp8hGHsxhOmmf4kj6EjwsQWwiSofqMd4">
            <Image src={reactCert} />
          </a>
        </div>
        <h3 style={{ marginTop: "2.5vw" }}>Data Analytic and Bigdata</h3>
        <div className="row">
          <a href="https://drive.google.com/uc?id=0BxFZD0Lum6qDSmxfRzd0MDROUmlYMlZTQi1xRDFUa2VBXy04">
            <Image src={bigdataCert} />
          </a>
        </div>
        <h3 style={{ marginTop: "2.5vw" }}>Other Course I've learned</h3>
        <div className="row">
          <a href="https://drive.google.com/uc?id=1CCXPA71OaBu3nJY98r6dU8z1I406--Hc">
            <Image src={technicalCert} />
          </a>
          <a href="https://drive.google.com/uc?id=1nNPiris2-pzbxh8OsvJNj5LH50GwYgu7">
            <Image src={deepLearningCert} />
          </a>
        </div>
      </div>
    );
  }
}

export default Certificates;
