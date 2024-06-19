import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  return (
    <div className="nav">
      <div className="nav__contents">
        <ul>
          <li>
            <Link
              to="/"
              className={active === "/" ? "nav-link nav-link-bold" : "nav-link"}
              onClick={() => setActive("/")}
            >
              vivek saliya
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={
                active === "/work" ? "nav-link nav-link-bold" : "nav-link"
              }
              onClick={() => setActive("/work")}
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={
                active === "/skills" ? "nav-link nav-link-bold" : "nav-link"
              }
              onClick={() => setActive("/skills")}
            >
              skills
            </Link>
          </li>
          <li className="nav__links">
            <a
              title="say hello"
              target="_blank"
              href="mailto:viveksaliya007@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="social-icon iconify iconify--ph"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="m224 96l-78.55 56h-34.9L32 96l96-64Z"
                    opacity=".2"
                  ></path>
                  <path d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78ZM40 200v-88.47l65.9 47a8 8 0 0 0 4.65 1.49h34.9a8 8 0 0 0 4.65-1.49l65.9-47V200Z"></path>
                </g>
              </svg>
            </a>
            <a
              title="let's connect"
              target="_blank"
              href="https://www.linkedin.com/in/viveksaliya"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="social-icon iconify iconify--ph"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M224 40v176a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
                    opacity=".2"
                  ></path>
                  <path d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></path>
                </g>
              </svg>
            </a>
            <a
              title="the bird app"
              target="_blank"
              href="https://www.x.com/vs_2611"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="social-icon iconify iconify--ph"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="m240 72l-32 32c-4.26 66.84-60.08 120-128 120c-32 0-40-12-40-12s32-12 48-36c0 0-55.15-32-47.22-120c0 0 39.66 40 87.22 48V88c0-22 18-40.27 40-40a40.74 40.74 0 0 1 36.67 24Z"
                    opacity=".2"
                  ></path>
                  <path d="M247.39 68.94A8 8 0 0 0 240 64h-30.43a48.65 48.65 0 0 0-41.47-24a46.87 46.87 0 0 0-33.74 13.7A47.87 47.87 0 0 0 120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 0 0-13.65 4.92c-4.3 47.79 9.57 79.77 22 98.18a111 111 0 0 0 21.89 24.2c-15.27 17.53-39.25 26.74-39.5 26.84a8 8 0 0 0-3.85 11.93c.74 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.68 0 129.72-54.42 135.76-124.44l29.9-29.9a8 8 0 0 0 1.73-8.72m-45 29.41a8 8 0 0 0-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08c11.52-6.25 27.56-17 37.88-32.48a8 8 0 0 0-2.61-11.34c-.13-.08-12.86-7.74-24.48-25.29C54.54 124.11 48 100.38 48 73.09c16 13 45.25 33.18 78.69 38.8A8 8 0 0 0 136 104V88a32 32 0 0 1 9.6-22.92A30.9 30.9 0 0 1 167.9 56c12.66.16 24.49 7.88 29.44 19.21a8 8 0 0 0 7.33 4.79h16Z"></path>
                </g>
              </svg>
            </a>
            <a
              title="github"
              target="_blank"
              href="https://www.github.com/saliyavivek"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="social-icon iconify iconify--ph"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M208 104v8a48 48 0 0 1-48 48h-24a32 32 0 0 1 32 32v40h-64v-40a32 32 0 0 1 32-32h-24a48 48 0 0 1-48-48v-8a49.3 49.3 0 0 1 8.51-27.3A51.92 51.92 0 0 1 76 32a52 52 0 0 1 43.83 24h32.34A52 52 0 0 1 196 32a51.92 51.92 0 0 1 3.49 44.7A49.3 49.3 0 0 1 208 104"
                    opacity=".2"
                  ></path>
                  <path d="M208.3 75.68A59.74 59.74 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58 58 0 0 0-7.7-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.8 43.8 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.8 43.8 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.76 41.76 0 0 1 7 22.52Z"></path>
                </g>
              </svg>
            </a>
            <a
              title="instagram"
              target="_blank"
              href="https://www.instagram.com/vivek.saliya"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="social-icon iconify iconify--ph"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M176 32H80a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h96a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-48 136a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
                    opacity=".2"
                  ></path>
                  <path d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Zm-88-96a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m64-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></path>
                </g>
              </svg>
            </a>
          </li>
          <li className="nav__loc">Gujarat, IN</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
