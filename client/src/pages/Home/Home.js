import React from "react";
import "./Home.css";




function Home() {
   
    return (
        <main>
           

            <section className="header-container">
                <div className="mood-swing" size="size md-6">
                    <span className="header" id="mood">
                        Mood
          </span>
                    <span className="headers" id="swing">
                        Swing
          </span>
                </div>
                <p id="feeling">How are you feeling?</p>


            </section>


        </main>
    );
}

export default Home;