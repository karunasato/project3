import React from "react";
import "./pages.css";

function HappySongs() {
    return (
        <div className="container">
                    <div className="card">
                    <div className = "card-body"></div>
                    <h2 className="card-title">Happy Songs</h2><br></br>
                
                    <iframe title="video1" id="video1" width="530" height="335"
                    src="https://www.youtube.com/embed/vP_Bi4z65Wk"/>

                    <iframe title="video2" id="video2" width="530" height="335"
                    src="https://www.youtube.com//embed/2zToEPpFEN8"/>

                    </div>
        </div>
          
    )
}
export default HappySongs;