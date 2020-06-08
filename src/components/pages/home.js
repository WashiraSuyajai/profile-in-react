import React, { Component } from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";

import Sakura from "./cover-pics/sakura.jpg";

const P = styled.p`
  margin-left: 5em;
  margin-right: 5em;
  width: 60%;
  font-size: 20px;
  font-fammily: Georgia;
`;

class Home extends Component {
  render() {
    return (
      <div style={{ marginBottom: "5vw" }}>
        <div style={{ position: "relative", textAlign: "center" }}>
          <Image src={Sakura} style={{ width: "100vw", opacity: "0.8" }} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "chivo",
              fontWeight: "bold",
            }}
          >
            <h1>WASHIRA SUYAJAI<br/><span style={{fontSize:"15px"}}>WEB DEVELOPER</span></h1>
          </div>
        </div>
        <div className="container" style={{ margin: "5% 10%" }}>
          <P>
            &ensp;&ensp;ยินดีต้อนรับทุกท่านเข้าสู่ Web Page ของผมนะครับ ในเวปไซต์นี้
            ผมได้จัดทำขึ้นจากการทดลองฝึกเขียน Web Site ด้วย React
            และตกแต่งหน้าตาด้วย CSS และ CSS Framework อย่าง React Bootstrap และ
            React-Semantic-UI
          </P>
          <P>
            &ensp;&ensp;การพัฒนาเวปไซต์ของผมนั้นเป็นการได้ทดลองทำสิ่งใหม่ๆออกมา
            เปรียบเหมือนเป็นการเดินทางในเส้นทางใหม่ๆ
            เปิดโลกทางเทคโนโลยีของผมมากๆ เปลี่ยนมนุษย์คนนึง
            ที่เคยไม่รู้จักการทำงานของเวปไซต์หนึ่งๆ ให้เข้าใจผ่านการลงมือทดลองทำ
            จนเป็นแบบที่ท่านได้เห็นนี้ และผมจะพัฒนาให้ดีขึ้นต่อไป
            ตามความรู้และเทคโนโลยีที่ก้าวไปข้างหน้าอย่างไม่หยุดยั้ง
          </P>
          <P>
            &ensp;&ensp;ท้ายสุดนี้
            ผมกราบขอบพระคุณทุกท่านที่ได้เข้ามารับชมภายในเวปไซต์นี้ด้วยความยินดียิ่งครับ
          </P>
        </div>
      </div>
    );
  }
}

export default Home;
