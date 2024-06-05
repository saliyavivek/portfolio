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
          <p>
            strive to create technology that not only solves problems but also
            transforms lives.
          </p>
          <p>like to solve the problems around the world using tech.</p>
          <p>
            driven by a desire to bring awesome, cool ideas to life,
            continuously.
          </p>
        </div>
        <div className="home__about-site">
          <h2>about this site</h2>
          <p>this site is built using &hearts; and ReactJS.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
