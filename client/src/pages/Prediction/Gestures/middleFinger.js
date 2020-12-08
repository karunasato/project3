import * as fp from "fingerpose";

const middleFingerGesture = new fp.GestureDescription('middle_finger');

middleFingerGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 2.0);
middleFingerGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, -1.0);
middleFingerGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 2.0);
middleFingerGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.5);
middleFingerGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.5);

// do this for all other fingers
middleFingerGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
middleFingerGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
middleFingerGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

export default middleFingerGesture;