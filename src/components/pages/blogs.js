import React, { Component } from "react";
import { Image } from "react-bootstrap";
import BlogPic from "./cover-pics/sensoji.jpg";

class Blogs extends Component {
  render() {
    return (
      <div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <Image src={BlogPic} style={{ width: "100vw", opacity: "0.8" }} />
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color:"rgb(255,255,255)",
              fontWeight:"bold"
            }}
          >
            My Blogs
          </h1>
        </div>
        <div
          className="container"
          style={{ marginTop: "5vw", marginBottom: "5vw" }}
        >
          <h2>ขออภัย <br/> ตอนนี้ยังไม่มีบล็อกแสดงครับ</h2>
        </div>
      </div>
    );
  }
}

export default Blogs;
