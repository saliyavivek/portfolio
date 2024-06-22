import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__contents">
        <h1 className="home__title">
          i'm vivek, an engineer. <br />i like building awesome stuff.
        </h1>
        <div className="home__description">
          <p>playing around with backend stuff.</p>
          <p>building cool and useful things using tech.</p>
        </div>
        <div className="home__about-site">
          <h2>about this site</h2>
          <p>
            this site is built with &hearts; and{" "}
            <a href="https://react.dev/" target="_blank">
              React
            </a>
            . the design is inspired by{" "}
            <a href="https://cheesetosht.xyz/" target="_blank">
              cheesetosht.xyz
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
