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
            href="https://minor-project-frontend-dun.vercel.app/"
            target="_blank"
          >
            <h4>Unleaf - A Book Exchange Platform</h4>
          </a>
          <div className="work_w_description">
            <p>
              Unleaf is a user-to-user book exchange platform allowing users to
              exchange books seamlessly. The platform provides features such as{" "}
              <u>listing</u> books for exchange, <u>searching</u> for available
              books, and <u>requesting</u> exchanges from other users.
            </p>
            <p>
              Users can list their books with relevant details such as title,
              author, genres, and ISBN, as well as manage the availability of
              their books.
            </p>
            <p>
              Integrated <u>image storage</u> using <u>Cloudinary</u> to manage
              and optimize book cover images. Users can request books from
              others, with <u>real-time notifications</u> of exchange statuses.
              Provides updates for actions like successful exchanges or new book
              uploads.
            </p>
            <p>
              Technologies used includes MERN stack (<u>MongoDB</u>,{" "}
              <u>Express.js</u>, <u>React.js</u>, <u>Node.js</u>), Bootstrap,{" "}
              <u>Cloudinary</u> for image storage and <u>Vercel</u> for
              deployment. This project showcases proficiency in full-stack web
              development, third-party service integration, and user experience
              design.
            </p>
          </div>
        </div>
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
              users to <u>view and manage</u> YouTube channels{" "}
              <u>they've subscribed</u> to. Users can <u>search</u> for
              channels, <u>sort</u> their subscriptions, <u>unsubscribe</u> from
              channels, and <u>subscribe</u> to new ones directly from the
              interface.
            </p>
            <p>
              Primarily based on <u>Google's YouTube Data API.</u>
            </p>
            <p>
              Tech stack used to build this project includes <u>Node.js</u>,{" "}
              <u>Express.js</u>
              for setting up the backend. On the frontend side, used <u>
                EJS
              </u>{" "}
              for templating and Bootstrap. Integrated <u>YouTube Data API</u>{" "}
              to fetch subscription data.
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
