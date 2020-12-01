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
<<<<<<< HEAD
      console.log('getting songs')
      
      
=======

>>>>>>> main
      if(pose === "thumbs_up"){
        //db.yourCollectionName.aggregate([{$sample:{size:1}}]);
        
        SONGS.getSongs("Happy Song").then((response) => {
         
          if (response.status === 200) {
<<<<<<< HEAD
            console.log(response.data[0].href)
            //let random = 
            setSong(response.data[0].href)
            //setSong(response.data[any].href)
            //db.song.aggregate([{$sample:{size:1}}]);
            console.log(song)
=======
            setSong(response.data[0].href)
>>>>>>> main
          }
        });
      }
      else if(pose === "thumbs_down"){
        SONGS.getSongs("Sad Song").then((response) => {
          if (response.status === 200) {
            setSong(response.data[0].href)
          }
        });
      }
    }

    const loadHandpose = async () => {
      const handNet = await handpose.load()
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
       
            <div className="container">
              <div className="row">
               <div className="col-md-4" >
                <p>I see a {pose} </p>
                <Webcam videoConstraints = {{
                  width: 360,
                  height: 280,
                }}
                ref = {webcamRef}

                style = {{
                  backgroundcolor:  "ae7eb8",
                  left:0,
                  right:0,
                  textAlign:"center",
                  zIndex:9,
                }}/>
                <canvas ref = {canvasRef}
                
                style = {{
                  position:"absolute",
                  left:0,
                  right:0,
                  textAlign:"center",
                  zIndex:9,
                }}/>
                </div>
                
                <div className="col-md-8" >
                <button type="button" className="btn btn-primary" onClick={getSong}>Change My Mood</button>
 
                <iframe width="550" height="315" src={song} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </section>  
        </div>
    );
}

export default Prediction;