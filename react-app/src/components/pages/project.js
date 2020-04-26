import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Basket from "./cover-pics/basket.jpg";

class Project extends Component {
  render() {
    return (
      <div>
        <div>
          <Image src={Basket} style={{ width: "100vw", height: "400px" }} />
        </div>
        <div className="container">
          <h1>Project</h1>
          <p>
            {" "}
            เป็นหน้าที่แสดงโปรเจคต่างๆที่ผมเคยฝึกทำเอาไว้ ทั้งตอนที่เรียนจาก
            Online Course และจากที่ฝึกทำด้วยตัวเองครับ
          </p>
        </div>
      </div>
    );
  }
}

export default Project;
