import React from "react";
import "./Work.css";
import resume from "../../assets/resume.pdf";

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
      <hr />
      <p className="work__footer">
        to explore rest of my projects, feel free to drop by on my{" "}
        <a href="https://github.com/saliyavivek/">github</a>.
        <br />
        if you're a recruiter, here's my{" "}
        <a href={resume} download={"viveksaliya"}>
          resume
        </a>
        .
      </p>
    </div>
  );
};

export default Work;
