import { erf } from "@tensorflow/tfjs";
import * as fp from "fingerpose";

const thumbsDownGesture = new fp.GestureDescription('thumbs_down');

thumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);

thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 2.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 2.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 2.0);
//decrease count for these things
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, -1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, -1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, -1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, -1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, -1.0);

// do this for all other fingers
thumbsDownGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
// decrease count for these things
thumbsDownGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, -1.0);
thumbsDownGesture.addDirection(fp.Finger.Middle, fp.FingerCurl.VerticalUp, -1.0);

export default thumbsDownGesture;