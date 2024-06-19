import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__title">
        <h3>skills</h3>
        <p>
          a brief overview of my technical skills and expertise in web
          development
        </p>
      </div>
      <div className="skills__s">
        <p>
          I specialize in the <span>MERN stack</span>, a powerful combination of
          technologies that allows me to build robust, scalable, and efficient
          web applications.{" "}
          <p>
            With a solid foundation in <span>MongoDB</span>, I adeptly manage
            databases, ensuring data is organized and easily retrievable.
          </p>
          <p>
            My expertise in <span>Express.js</span> enables me to create
            seamless server-side logic, ensuring that applications run smoothly
            and efficiently.{" "}
          </p>
          <p>
            <span>React.js</span> is where my front-end skills truly shine; I
            build dynamic and responsive user interfaces that provide an
            exceptional user experience.
          </p>{" "}
          <p>
            Finally, <span>Node.js</span> ties everything together, allowing me
            to develop fast and scalable server-side applications.
          </p>
        </p>
        <p>
          <p>
            Beyond the core components of the MERN stack, I am proficient in
            various complementary technologies and tools.
          </p>
          <p>
            My experience with<span> version control systems</span> like{" "}
            <span>Git</span> ensures that I can collaborate effectively with
            teams and maintain clean and organized codebases.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Skills;
