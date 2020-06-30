import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Basket from "./cover-pics/basket.jpg";

const Block = {
  display: "block",
  margin: "3%",
  padding: "1%",
  width: "40%",
  height: "25%",
  boxShadow: "2px 2px 2px 2px rgb(234, 237, 237)",
};
class Project extends Component {
  render() {
    return (
      <div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <Image src={Basket} style={{ width: "100vw", opacity: "0.6" }} />
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "rgb(255,255,255)",
              fontWeight: "bold",
            }}
          >
            Project
          </h1>
        </div>
        <div className="container" style={{ margin: "5%", fontWeight:"bold" }}>
          <p>
            {" "}
            โปรเจคต่างๆที่ผมเคยฝึกทำเอาไว้ ทั้งตอนที่เรียนจาก
            Online Course และจากที่ฝึกทำด้วยตัวเองครับ
          </p>
          <p style={{marginTop: "5%"}}>HTML CSS</p>
          <div style={Block}><a href="https://washirasuyajai.github.io/webpage-perfume-shop/">Using HTML and CSS to Build The Perfume Shop Landing Page</a></div>
          <div style={Block}><a href="https://washirasuyajai.github.io/bootstrap-lab/">Using HTML and Bootstrap to Build The Travel Web Page</a></div>
          <p>React Node and Express</p>
          <div style={Block}><a href="https://github.com/WashiraSuyajai/react-post-http-request-fetch-thaipost">Using Thai Post  Rest API to React</a></div>
          <div style={Block}><a href="https://github.com/WashiraSuyajai/react-and-express">Create React fetch data from Node js</a></div>
          <div style={Block}><a href="https://github.com/WashiraSuyajai/nodejs-express-crud">Create Chelsea List Player API from Express Framework</a></div>
          <div style={Block}><a href="https://github.com/WashiraSuyajai/simple-blog-in-next">A Simple Web Pages with Next js</a></div>
        </div>
      </div>
    );
  }
}

export default Project;
