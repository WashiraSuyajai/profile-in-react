import React, { Component } from "react";
import htmlCert from '../components/certificate-pics/html-fundamental.JPG'

class Certificates extends Component {
  render() {
    return (
    <div>
      This is My Certificates
      <div className='row'>
        <div className='col'>
          The computing languages
        </div>
        <div className='col'>
          <img src={htmlCert}/>
          <br/>
          <img/>
        </div>
      </div>
      </div>)
  }
}

export default Certificates;
