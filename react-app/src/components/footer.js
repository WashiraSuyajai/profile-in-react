import React, { Component } from "react";
import lineIcon from "../components/pics/line.png";
import facebookIcon from "../components/pics/facebook.png";
import instagramIcon from "../components/pics/instagram.png";


class Footer extends Component {
  render() {
    return (
      <div
        style={{ color: "white", backgroundColor: "#E5E7E9", paddingTop: "20px" }}
      >
        <div>
          <div className="display-name" style={{ textAlign: "center" }}>
            washira
          </div>
          <h2 id="FollowUs" style={{ textAlign: "center" }}>
            Follow us:
          </h2>
          {/* Icons */}
          <div className="row" id="footerContent" style={{ alignItems: "center" }}>

            {/* Facebook */}
            <div>
              <a href="https://www.facebook.com/washira.suyajai">
                <img
                  src={facebookIcon}
                  style={{
                    width: "48px",
                    borderRaefdius: "10px",
                    marginLeft: "10px"
                  }}
                />
              </a>
            </div>

            {/* Line */}
            <div>
              <img
                src={lineIcon}
                style={{
                  width: "48px",
                  borderRadius: "10px",
                  marginLeft: "10px"
                }}
              />
            </div>

            {/* Instagram */}
            <div>
              <a href="#">
                <img
                  src={instagramIcon}
                  style={{
                    width: "48px",
                    borderRadius: "10px",
                    marginLeft: "10px"
                  }}
                />
              </a>
            </div>
          </div>
          <div className="copyright" style={{ textAlign: "center" }}>COPYRIGHT2019@washira</div>
        </div>
      </div>
    );
  }
}

export default Footer;
