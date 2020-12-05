import React from "react";

export default ()=> 
<div className="accordion" id="accordionExample">
<div className="card">
  <div className="card-header" id="headingOne">
    <h2 className="mb-0">
      <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How Does it Work?
      </button>
    </h2>
  </div>

  <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
    <div class="card-body">
     <h3>Mood Swing plays songs based on your mood!</h3> 
     <br/>
      <p>Are you happy?- Give a thumbs-up on the webcam and we'll play you happy songs!</p>
      <p>Feeling sad?- Show a thumbs-down and we will play you sad songs... but don't worry there's some additional features that might help your mood.</p>
      <p>Are you in love? Partying? Needing some rest?- click on the buttons below the webcam and you'll get songs that will coordinate.</p>
    </div>
  </div>
</div>
</div>
