import React from "react";
import "./Home.css";




function Home() {
    return (
        <main>
            {/* <div className="home-container"> */}

            <section className="header-container">
                <div className="mood-swing" size="size md-6">
                    <span className="header" id="mood">
                        Mood
          </span>
                    <span className="header" id="swing">
                        Swing
          </span>
                </div>
                <p id="feeling">How are you feeling?</p>

            </section>





            {/* </div> */}
        </main>
    );
}

export default Home;