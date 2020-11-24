
// Finger node library
const fingerNodes = {
    thumb:[0,1,2,3,4],
    indexFinger: [0,5,6,7,8],
    middleFinger: [0,9,10,11,12],
    ringFinger: [0,13,14,15,16],
    pinky: [0,17,18,19,20]
}

// Drawing Function
export const drawHands = (predictions, ctx) =>{
    // Check if we have any predictions

    if(predictions.length>0){

        // loop through each prediction
        predictions.forEach(prediction => {

            // Get all landmarks
            const landmarks = prediction.landmarks;

            // Loop for each finger
            for(let j=0; j< Object.keys(fingerNodes).length; j++) {
                let finger = Object.keys(fingerNodes)[j];
                // Loop through each node (joint)
                for(let k=0; k<fingerNodes[finger].length-1; k++) {

                    // Identify node pairs
                    const firstNodeIndex = fingerNodes[finger][k];
                    const secondNodeIndex = fingerNodes[finger][k+1];
                    
                    // Draw paths
                    ctx.beginPath();
                    ctx.moveTo(
                        landmarks[firstNodeIndex][0],
                        landmarks[firstNodeIndex][1]
                    );
                    ctx.lineTo(
                        landmarks[secondNodeIndex][0],
                        landmarks[secondNodeIndex][1]
                    );
                    ctx.strokeStyle = "red";
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }
            }

            // Loop through the landmarks and draw them
            for (let i=0; i<landmarks.length; i++){
                // Get x
                const x = landmarks[i][0];
                // Get y
                const y = landmarks[i][1];

                // Start drawing
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 3*Math.PI);

                // Set color
                ctx.fillStyle = "blue"
                ctx.fill();
            }
        });
    }
}