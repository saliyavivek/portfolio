import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [liked, setLiked] = useState(false);
  function handleLike() {
    setLiked(!liked);
  }

  return (
    <div className="home">
      <div className="home__contents">
        <h1 className="home__title">
          i'm vivek, a developer. <br />i like building awesome stuff.
        </h1>
        <div className="home__description">
          <p>playing around with backend stuff.</p>
          <p>building cool and useful things using tech.</p>
        </div>
        <div className="home__about-site">
          <h2>about this site</h2>
          <p>
            this site is built using{" "}
            <a href="https://react.dev/" target="_blank">
              React
            </a>
            . the site design is inspired by{" "}
            <a href="https://cheesetosht.xyz/" target="_blank">
              cheesetosht.xyz
            </a>
            .
          </p>
          <p className="para-likes">
            Enjoying your time here? Show some love with a like!
            {/* Drop a like to let me know you're vibing in here! */}
            {/* Enjoying your visit? Show your support by liking this page{" "} */}
            <button
              onClick={() => {
                handleLike();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="social-icon iconify iconify--ph"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill={liked ? "#6F736D" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
              </svg>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
