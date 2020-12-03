import React from "react";
import LoginForm from "../Auth/LoginForm";
import "./Home.css";
import props from 'prop-types';



function Home() {
    return (
        <main>
            {/* <div className="home-container"> */}

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

                <div>
                    <LoginForm login={props.login} signUpUser={props.signUpUser} />

                </div>

            </section>


        </main>
    );
}

export default Home;