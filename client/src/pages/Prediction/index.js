import React, {useRef, useState} from "react";
import "./index.css";
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import {drawHands} from '../../utils/draw'
import * as fp from 'fingerpose'
import thumbsDownGesture from "./Gestures/thumbsDown";
import ThumbsUpGesture from "./Gestures/thumbsUp";
import SONGS from "../../utils/SONGS"

function Prediction() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const[pose, setPose] = useState(null);
    const[song, setSong] = useState(null);

    const GE = new fp.GestureEstimator([
      fp.Gestures.VictoryGesture,
      //fp.Gestures.ThumbsUpGesture,
      thumbsDownGesture,
      ThumbsUpGesture,
    ]);
    
    const getSong = () => {
      console.log('getting songs')

      if(pose === "thumbs_up"){
        SONGS.getSongs("Happy Song").then((response) => {
          if (response.status === 200) {
            console.log(response.data[0].href)
            setSong(response.data[0].href)
            console.log(song)
          }
        });
      }
      else if(pose === "thumbs_down"){
        SONGS.getSongs("Sad Song").then((response) => {
          if (response.status === 200) {
            console.log(response.data[0].href)
            setSong(response.data[0].href)
            console.log(song)
          }
        });
      }
    }

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

        console.log(window.innerWidth)


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
        <div>
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
                <Webcam videoConstraints = {{
                  width: window.innerWidth/2,
                }}
                ref = {webcamRef}
                style = {{
                  //position:"absolute",
                  //marginLeft: "auto",
                  //marginRight: "auto",
                  left:0,
                  right:0,
                  textAlign:"center",
                  zIndex:9,
                }}/>
                <canvas ref = {canvasRef}
                style = {{
                  position:"absolute",
                  //marginLeft: "auto",
                  //marginRight: "auto",
                  left:0,
                  right:0,
                  textAlign:"center",
                  zIndex:9,
                }}/>

            </section>
            <button onClick={getSong}>Change My Mood</button>
            <h2>{song}</h2>
            <iframe width="560" height="315" src={song} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    );
}

export default Prediction;