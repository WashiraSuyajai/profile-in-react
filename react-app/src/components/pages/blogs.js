import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Harumi from "./cover-pics/harumi-wharf.jpg";

class Blogs extends Component {
  render() {
    return (
      <div>
        <div>
          <Image src={Harumi} style={{ width: "100vw", height: "100vh" }} />
        </div>
        <div
          className="container"
          style={{ marginTop: "5vw", marginBottom: "5vw" }}
        >
          <h2>This is Blogs</h2>
          <h2>ตอนนี้ยังไม่มีบล็อกแสดงครับ</h2>
        </div>
      </div>
    );
  }
}

export default Blogs;
