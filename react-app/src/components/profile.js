import React, { Component } from "react";
import styled from "styled-components";

class Profile extends Component {
  render() {
    const Button = styled.button`
      background-color: white;
      color: blue;
      border: 2px solid blue;
    `;
    return (
      <div className='container'>
        <div>This is About Me</div>
        <Button>Click</Button>
        <h2>ถ้าถามถึงเพลงโปรดน่ะหรอ</h2>
        <h1>นี่ไง !!!!!!</h1>
        <h5>(แนะนำให้เปิด Volume +++ เพื่ออรรถรส)</h5>
        {/* embed video*/}
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IHS3qJdxefY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
           
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Profile;
