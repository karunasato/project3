import React, {useRef, useState} from "react";
import "./index.css";
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import {drawHands} from '../../utils/draw'
import * as fp from 'fingerpose'
import thumbsDownGesture from "./Gestures/thumbsDown";
import ThumbsUpGesture from "./Gestures/thumbsUp";



// Hand Pose Estimation
////////////////////////////////
// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load handpose DONE
// 6. Detect function DONE
// 7. Drawing utilities 
// 8. Draw functions 

// Finger Pose Recognition
/////////////////////////////
// 0. Install fingerpose npm install fingerpose DONE
// 1. Add Use State DONE
// 2. Import emojis and finger pose import * as fingerpose from "fingerpose"; DONE
// 3. Setup hook and emoji object
// 4. Update detect function for gesture handling
// 5. Add emoji display to the screen


function Prediction() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const[pose, setPose] = useState(null);

    const GE = new fp.GestureEstimator([
      fp.Gestures.VictoryGesture,
      //fp.Gestures.ThumbsUpGesture,
      thumbsDownGesture,
      ThumbsUpGesture,
    ]);
    

    const loadHandpose = async () => {
      const handNet = await handpose.load()
      console.log('handpose loaded')
      //loop and detect hands
      setInterval(() => {
        detectHands(handNet);
      }, 1000);
    }

    const detectHands = async (handNet) => {
      // Check data is available

      if(
        typeof webcamRef.current !=="undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState ===4
      ) {
        //Get video properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        //set video height and width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        //set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        //make detections
        const hands = await handNet.estimateHands(video);

        // Gesture detections
        if(hands.length > 0){



          const gesture = await GE.estimate(hands[0].landmarks,8);

          if(gesture.gestures !== undefined && gesture.gestures.length>0) {
            const confidence = gesture.gestures.map(
              (prediction) => prediction.confidence
            );
            const maxConfidence = confidence.indexOf(
              Math.max.apply(null, confidence)
            );
            setPose(gesture.gestures[maxConfidence].name)
          }
        }

        //draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawHands(hands, ctx);
      }
    };

    loadHandpose();

    return (
        <main>
            <section className="header-container">
                <div className="mood-swing" size="size md-6">
                    <span className="header" id="mood">
                        Mood
          </span>
                    <span className="header" id="swing">
                        Swing
          </span>
                </div>
                <p id="feeling">Hello from the prediciton page</p>
                <p>I see a {pose} </p>
                <Webcam ref = {webcamRef}
                style = {{
                  position:"absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left:0,
                  right:0,
                  textAlign:"center",
                  zIndex:9,
                  width:640,
                  height:480,
                }}/>
                <canvas ref = {canvasRef}
                style = {{
                  position:"absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left:0,
                  right:0,
                  textAlign:"center",
                  zIndex:9,
                  width:640,
                  height:480,
                }}/>

            </section>
        </main>
    );
}

export default Prediction;