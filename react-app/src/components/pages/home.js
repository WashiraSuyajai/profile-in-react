import React, { Component } from "react";
import styled from "styled-components";

const P = styled.p`
  margin-top: 2vw;
  font-size: 20px;
  font-fammily: "Trebuchet MS", Helvetica, sans-serif;
`;
const PBottom = styled(P)`
  margin-bottom: 5vw;
`;

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1
          style={{
            marginTop: "5vw",
            fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
          }}
        >
          Welcome to my page
        </h1>
        <P>
          ยินดีต้อนรับทุกท่านเข้าสู่ Web Page ของผมนะครับ ในเวปไซต์นี้
          ผมได้จัดทำขึ้นจากการทดลองฝึกเขียน Web Site ด้วย React
          และมีการตกแต่งหน้าตาด้วย CSS Framework อย่าง React Bootstrap และ
          React-Semantic-UI ซึ่งอาจจะสวย (รึเปล่าหว่า?)
        </P>
        <P>
          นอกเหนือจากการโชว์ประวัติส่วนตัวและความเป็นตัวเองผ่านเวปไซต์นี้แล้ว
          ผมยังมีแผนที่จะทำเวปนี้ให้เป็นที่เผยแพร่บทความต่างๆที่ผมจะเขียนในอนาคต
          (ซึ่งเป็นเหตุผลว่า ทำไมถึงมีเมนู Blogs ที่เมนูบาร์){" "}
        </P>
        <PBottom>
          ดังนั้น ในอนาคตไม่ใกล้ไม่ไกลนี้
          ทุกคนจะได้พบกับมัน(บทความ)อย่างแน่นอนครับ ดีใจที่ได้พบกับทุกท่านครับ
        </PBottom>
      </div>
    );
  }
}

export default Home;
