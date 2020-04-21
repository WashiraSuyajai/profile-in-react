import React, { Component } from "react";
import lineIcon from "../components/pics/line.png";
import facebookIcon from "../components/pics/facebook.png";
import instagramIcon from "../components/pics/instagram.png";

const image = {
  width: "30px",
  borderRadius: "10px",
  marginLeft: "10px",
};

class Footer extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          color: "black",
          backgroundColor: "#FDD3FB",
          paddingTop: "10px",
        }}
      >
        <div>
          <div className="" style={{ textAlign: "center" }}>
            <h4>washira</h4>
          </div>
          <h5 id="Follow" style={{ marginLeft: "60vw" }}>
            Follow me
          </h5>
          {/* Icons */}
          <div
            className="row"
            style={{
              alignItems: "normal",
              marginLeft: "58vw",
              marginTop: "15px",
              marginBottom: "30px",
            }}
          >
            {/* Facebook */}
            <div>
              <a href="https://www.facebook.com/washira.suyajai">
                <img src={facebookIcon} style={image} />
              </a>
            </div>

            {/* Line */}
            <div>
              <a href="">
                <img src={lineIcon} style={image} />
              </a>
            </div>

            {/* Instagram */}
            <div>
              <a href="#">
                <img src={instagramIcon} style={image} />
              </a>
            </div>
          </div>
          <div style={{ marginLeft: "60vw", marginBottom: "20px" }}>
            2020@washira
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
