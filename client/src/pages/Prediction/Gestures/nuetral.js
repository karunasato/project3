import { erf } from "@tensorflow/tfjs";
import * as fp from "fingerpose";

const nuetralGesture = new fp.GestureDescription('nuetral');

nuetralGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
nuetralGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
nuetralGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
nuetralGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
nuetralGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.5);
nuetralGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 0.5);
nuetralGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.5);
nuetralGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.5);
nuetralGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, -2.0);
nuetralGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, -2.0);


// do this for all other fingers
nuetralGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
nuetralGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
nuetralGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, -5.0);
nuetralGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
nuetralGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


export default nuetralGesture;