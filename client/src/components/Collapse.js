import React from "react";


export default ()=> 
<div className="accordion" id="accordionExample">

    <h2 className="mb-0">
      <button style = {{ backgroundColor:"black", color:"whitesmoke"}} color = "white "className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How Does it Work?
      </button>
    </h2>

  <div style = {{ backgroundColor:"black", maxWidth: "750px" }} id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">

     <h3 style = {{marginLeft: 25 }}>Mood Swing plays songs based on your mood!</h3> 
     <br/>
      <p style = {{marginLeft: 25, fontSize:15 }} >👍 Give the webcam a thumbs-up to play happy songs!</p>
      <p style = {{marginLeft: 25, fontSize:15 }} >👎 Give the webcam a  thumbs-down to play sad songs</p>
      <p style = {{marginLeft: 25, fontSize:15 }} > Need more moods?  Click the buttons below to set the coorespondig mood</p>
      <p style = {{marginLeft: 25, fontSize:15 }} > Can you guess the secret gesture??</p>
    </div>
  </div>


