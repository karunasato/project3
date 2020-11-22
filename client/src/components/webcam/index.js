import React from "react";
import Webcam from './webcam'

class WebcamModule extends React.Component {
  constructor(props) {
    super(props);
    this.textRef = React.createRef();
    this.webcamRef = React.createRef();
  }

  componentDidMount(){
    const webcam = new Webcam(this.webcamRef);
    
    async function init() {
      console.log(webcam)
      await webcam.setup();
    }
    init();
  }


    render(){
      return (
      <div>
        <h2>Webcam Module Loaded</h2>
        <p ref={this.textRef}>this.textref Testing</p>
        <div>
            <video autoPlay muted src="" ref = {this.webcamRef} width="224" height = "224"></video>
        </div>
        <video></video>
      </div>
      )
    }  

  }
  
  export default WebcamModule;