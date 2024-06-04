import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__contents">
        <h1 className="home__title">
          i'm vivek, an engineer. <br />i like my tech crafted than built.
        </h1>
        <div className="home__description">
          <p>building and breaking frontends, backends & wifi at bluelearn</p>
          <p>
            like to play around with linuxes, computer networks, frontends and
            databases.
          </p>
          <p>overengineering is my goto way of learning.</p>
        </div>
        <div className="home__about-site">
          <h2>about this site</h2>
          <p>
            this site is built on sveltekit and tailwind. the photography
            section uses data from a small golang script i wrote to fetch all
            the photos I post on my VSCO.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
