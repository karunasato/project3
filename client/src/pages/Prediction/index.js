import React, {useRef, useState, useEffect} from "react";
import "./index.css";
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import {drawHands} from '../../utils/draw'
import * as fp from 'fingerpose'
import thumbsDownGesture from "./Gestures/thumbsDown";
import thumbsUpGesture from "./Gestures/thumbsUp";
import middleFingerGesture from "./Gestures/middleFinger"
import nuetralGesture from "./Gestures/nuetral"
import SONGS from "../../utils/SONGS"
import * as speechCommands from '@tensorflow-models/speech-commands';


function Prediction() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const[pose, setPose] = useState(null);
    const[song, setSong] = useState(null);
    const[voiceCommand, setVoiceCommand] = useState(null);
  
    const GE = new fp.GestureEstimator([
      thumbsDownGesture,
      thumbsUpGesture,
      middleFingerGesture,
      nuetralGesture,
    ]);
    
    const getSong = (choice) => {
      if(choice === "thumbs_up"){
        SONGS.getSongs("Happy Song").then((response) => {
          if (response.status === 200) {
            let random = Math.floor(Math.random() * (response.data.length - 1));
            setSong(response.data[random].href)
          }
        });
      }
      else if(choice === "thumbs_down"){
        SONGS.getSongs("Sad Song").then((response) => {
          if (response.status === 200) {
            let random = Math.floor(Math.random() * (response.data.length - 1));

            setSong(response.data[random].href)
          }
        });
      }
      else if(choice === "Love Song"){
        SONGS.getSongs("Love Song").then((response) => {
          if (response.status === 200) {
            let random = Math.floor(Math.random() * (response.data.length - 1));

            setSong(response.data[random].href)
          }
        });
      }
      else if(choice === "Party Song"){
        SONGS.getSongs("Party Song").then((response) => {
          if (response.status === 200) {
            let random = Math.floor(Math.random() * (response.data.length - 1));
            setSong(response.data[random].href)
          }
        });
      }
      else if(choice === "Rest Song"){
        SONGS.getSongs("Rest Song").then((response) => {
          if (response.status === 200) {
            let random = Math.floor(Math.random() * (response.data.length - 1));
            setSong(response.data[random].href)
          }
        });
      }
    }



    const loadHandpose = async () => {
      console.log("loading hand pose")
      const handNet = await handpose.load()
      let recognizer;
      recognizer = speechCommands.create('BROWSER_FFT');
      await recognizer.ensureModelLoaded();
      const words = recognizer.wordLabels();
      predictWord(words, recognizer);

      //loop and detect hands
      setInterval(() => {
        detectHands(handNet);
      }, 1000);
    }

    function predictWord(words, recognizer) {
      // Array of words that the recognizer is trained to recognize.
      recognizer.listen(({scores}) => {
        // Turn scores into a list of (score,word) pairs.
        scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));
        // Find the most probable word.
        scores.sort((s1, s2) => s2.score - s1.score);

        setVoiceCommand(scores[0].word);
      }, {probabilityThreshold: 0.90});
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

        // draw mesh (uncomment this section to draw vectors over the hand)
        // This will help ensure tensor flow is detecting the hand correctly
        // Uses the draw.js in the utils foler
          // const ctx = canvasRef.current.getContext("2d");
          // drawHands(hands, ctx);
      }
    };

    useEffect(() => {
      loadHandpose();
    },[])


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
               <div className="col-md-9" >
               <iframe width="750" height="419" src={song} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
               </div>
                
                <div className="col-md-3" >
                <p>I see a [   {pose}   ] ...? </p>
                <p> You just said "{voiceCommand}"</p>
                <button type="button" className="btn btn-primary" onClick={() => getSong(pose)}>Confirm</button>
                <Webcam videoConstraints = {{
                  width: 320,
                  height: 270,
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
              </div>
            </div><br></br><br></br><br></br><br></br><br></br>
                <h6>Let's play more music</h6><br></br>
                <button id="love" type="button" className="btn btn-primary" onClick={() => getSong("Love Song")}>Are you in love?</button>
                <button id="party" type="button" className="btn btn-primary" onClick={() => getSong("Party Song")}>Are you in a party mood?</button>
                <button id="rest" type="button" className="btn btn-primary" onClick={() => getSong("Rest Song")}>Do you want some rest?</button>

          </section>  
        </div>
    );
}

export default Prediction;