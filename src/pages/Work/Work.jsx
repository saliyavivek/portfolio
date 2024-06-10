import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <div className="work">
      <div className="work__title">
        <h3>projects</h3>
        <p>a brief summary of my projects so far</p>
      </div>
      <div className="work__w">
        <div className="work_w_top">
          <a
            href="https://github.com/saliyavivek/youtube-subscription-manager"
            target="_blank"
          >
            <h4>YouTube Subscription Manager</h4>
          </a>
          <div className="work_w_description">
            <p>
              The YouTube Subscription Manager is a web application that allows
              users to view and manage their YouTube channel subscriptions.
              Users can search for channels, sort their subscriptions,
              unsubscribe from channels, and subscribe to new ones directly from
              the interface.
            </p>
            <p>Primarily based on Google's YouTube Data API. </p>
            <p>
              Tech stack used to build this project includes Node.js, Express.js
              for setting up the backend. On the frontend side, used EJS for
              templating and Bootstrap. Integrated YouTube Data API to fetch
              subscription data.
            </p>
          </div>
        </div>
      </div>
      <div className="work__w">
        <div className="work_w_top">
          <a href="http://mynotebook-wli5.onrender.com/" target="_blank">
            <h4>My Notebook</h4>
          </a>
          <div className="work_w_description">
            <p>
              Designed and Developed a Note taking application where users can
              efficiently create, edit, and delete notes.The application
              features a secure login and logout system, ensuring that users'
              data is protected and private.
            </p>
            <p>
              Users can set notes as private to ensure that only they can view
              and edit or can share notes with others, making collaboration easy
              and efficient.
            </p>
            <p>
              Tech stack used to build this project includes MongoDB for
              database, Node.js with Express for server infrastructure, EJS for
              templating and JWT(JSON Web Token) for authentication.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <p className="work__footer">
        to explore rest of my projects, feel free to drop by on my{" "}
        <a href="https://github.com/saliyavivek/">github</a>.
        <br />
        if you're a recruiter, here's my <a href="#">resume</a>.
      </p>
    </div>
  );
};

export default Work;
