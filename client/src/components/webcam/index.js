import React from "react";
import Webcam from "react-webcam";
//import Webcam from "react-webcam";

function WebcamModule() {
    const videoConstraints = {
        //width: 640,
        //height: 480,
        //facingMode: "user"
      };
    
    const webcamRef = React.useRef(null);
       
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
          [webcamRef]
    );

    return (
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            Webcam Module Loaded
          </p>
          <Webcam 
            audio={false}
            height={720}
            width={1280}
            videoConstraints={videoConstraints}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            />
        </div>
        <button onClick={capture}>Capture photo</button>
      </div>

    );
  }
  
  export default WebcamModule;