import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Coverpic from "../pages/cover-pics/door.jpg";
import htmlCert from "../certificate-pics/html-fundamental.JPG";
import pythonCert from "../certificate-pics/python-for-data-science.jpg";
import bigdataCert from "../certificate-pics/data-bigdata.JPG";
import reactCert from "../certificate-pics/react-at-futureskill.jpg";
import technicalCert from "../certificate-pics/technical-support-fundamentals.jpg";
import jsCert from "../certificate-pics/JavaScript.JPG";
import deepLearningCert from "../certificate-pics/intro-deep-learning.jpg";
class Certificates extends Component {
  render() {
    const styleImg = {
      marginTop: "20px",
      marginLeft: "2.5vw",
      marginRight: "2.5vw",
      marginBottom: "20px",
      width: "300px",
      height: "auto",
      border: "1px solid red",
    };
    return (
      <div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <Image style={{ width: "100%", opacity: "0.8" }} src={Coverpic} />
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              color: "rgb(255,255,255)",
            }}
          >
            My Certificates
          </h1>
        </div>

        <div className="container">
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
              <img style={styleImg} src={pythonCert} />
            </a>
            <a href="https://www.sololearn.com/Certificate/1024-17008626/pdf/">
              <img style={styleImg} src={jsCert} />
            </a>
            <a href="https://drive.google.com/uc?id=0BxFZD0Lum6qDZGx5Wi1nTlhOR3V6blNMR3c5V25aNjc0OHV3">
              <img style={styleImg} src={htmlCert} />
            </a>
          </div>
          <h3 style={{ marginTop: "2.5vw" }}>The Web Application Skill</h3>
          <div className="row">
            <a href="https://drive.google.com/uc?id=1pp8hGHsxhOmmf4kj6EjwsQWwiSofqMd4">
              <img style={styleImg} src={reactCert} />
            </a>
          </div>
          <h3 style={{ marginTop: "2.5vw" }}>Data Analytic and Bigdata</h3>
          <div className="row">
            <a href="https://drive.google.com/uc?id=0BxFZD0Lum6qDSmxfRzd0MDROUmlYMlZTQi1xRDFUa2VBXy04">
              <img style={styleImg} src={bigdataCert} />
            </a>
          </div>
          <h3 style={{ marginTop: "2.5vw" }}>Other Course I've learned</h3>
          <div className="row">
            <a href="https://drive.google.com/uc?id=1CCXPA71OaBu3nJY98r6dU8z1I406--Hc">
              <img style={styleImg} src={technicalCert} />
            </a>
            <a href="https://drive.google.com/uc?id=1nNPiris2-pzbxh8OsvJNj5LH50GwYgu7">
              <img style={styleImg} src={deepLearningCert} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Certificates;
