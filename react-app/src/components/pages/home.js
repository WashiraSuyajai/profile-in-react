import React, { Component } from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";
import PinkSea from "./cover-pics/pink-sea.jpg";

const P = styled.p`
  margin-top: 2vw;
  font-size: 20px;
  font-fammily: chivo;
`;
const PBottom = styled(P)`
  margin-bottom: 5vw;
`;

class Home extends Component {
  render() {
    return (
      <div style={{ marginBottom: "5vw" }}>
        <div>
          <Image src={PinkSea} style={{ width: "100vw", height: "400px" }} />
        </div>
        <div className="container">
          <h1
            style={{
              marginTop: "5vw",
              fontFamily: "chivo",
            }}
          >
            Welcome to my page
          </h1>
          <P>
            ยินดีต้อนรับทุกท่านเข้าสู่ Web Page ของผมนะครับ ในเวปไซต์นี้
            ผมได้จัดทำขึ้นจากการทดลองฝึกเขียน Web Site ด้วย React
            และมีการตกแต่งหน้าตาด้วย CSS Framework อย่าง React Bootstrap และ
            React-Semantic-UI เพิ่อเพิ่มความสวย (รึเปล่าหว่า?)
          </P>
          <P>
            ซึ่งการพัฒนาเวปไซต์ของผมนั้นเป็นการได้ทดลองทำสิ่งใหม่ๆออกมา
            เปรียบเหมือนเป็นการเดินทางในเส้นทางใหม่ๆ เปิดโลกทางเทคโนโลยีของผมมากๆ
            เปลี่ยนมนุษย์คนนึง ที่เคยไม่รู้จักการทำงานของเวปไซต์หนึ่งๆ
            ให้เข้าใจผ่านการลงมือทดลองทำ จนเป็นแบบที่ท่านได้เห็นนี้
            และผมจะพัฒนาให้ดีขึ้นต่อไป ตามความรู้และเทคโนโลยีที่ก้าวไปข้างหน้าอย่างไม่หยุดยั้ง
          </P>
          <PBottom>
            ท้ายสุดนี้
            ผมกราบขอบพระคุณทุกท่านที่ได้เข้ามารับชมภายในเวปไซต์นี้ด้วยความยินดียิ่งครับ
          </PBottom>
        </div>
      </div>
    );
  }
}

export default Home;
