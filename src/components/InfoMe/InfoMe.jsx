import React from 'react';
import Projects from '../Projects/Projects';

const InfoMe = () => {
  return (
    <div className="InfoMe">
      <div className="InfoMe__container" id="summary">
        <h2>Summary</h2>
        <div>
          I'm interested in writing code and then seeing the result of my efforts. I started to
          learn programming languages from school, such as Pascal, Delphi. In my university years I
          got acquainted with C++. But I always wanted to dive into WEB-development, so I settled on
          learning the JavaScript programming language. In my spare time from programming I play the
          piano, do sports and go hiking.
        </div>
      </div>
      <div className="InfoMe__container" id="education">
        <h2>Education</h2>
        <div className="InfoMe__univer">
          Southern Federal University - Taganrog, Russia 2015-2019:
        </div>
        <div className="InfoMe__specialty">
          Information security: Information and Analytical Systems of Financial Monitoring
        </div>
        <br />
        <div className="InfoMe__univer">
          Southern Federal University - Taganrog, Russia 2019-2021:
        </div>
        <div className="InfoMe__specialty">
          Applied Informatics: Information and analytical systems and 'big data' technologies
        </div>
      </div>
      <div className="InfoMe__container" id="skills">
        <h2>Skills</h2>
        <ul className="InfoMe__check">
          <div>Frontend:</div>
          <li>HTML / CSS</li>
          <li>TypeScript / JavaScript (ES6+)</li>
          <li>ReactJS</li>
          <li>Redux Toolkit / Redux / Redux Saga</li>
          <li>REST API (Axios, Fetch, React Query).</li>
          <li>Post & Pre Processing CSS / CSS Module</li>
          <li>Responsive design / Adaptive design</li>
          <div>Backend:</div>
          <li>Node.JS</li>
          <li>Express</li>
          <li>Mongoose</li>
          <li>Sequelize</li>
          <li>PostgreSQL / MongoDB / MySQL</li>
          <li>JWT</li>
          <div>Other skills:</div>
          <li>Git / GitHub</li>
          <li>Figma</li>
          <li>BEM (CSS)</li>
          <li>Jira</li>
        </ul>
      </div>
      <div className="InfoMe__container" id="projects">
        <Projects />
      </div>
      <div className="InfoMe__container" id="contacts">
        <h2>Contacts</h2>
        <ul className="InfoMe__contactsList">
          <li className="InfoMe__contactsList__contactsItem-Location">Location: Armavir, Russia</li>
          <li className="InfoMe__contactsList__contactsItem-Email">
            Email: ermolovichd007@gmail.com
          </li>
          <li className="InfoMe__contactsList__contactsItem-Email">Discord: Aurtekh#3786</li>
          <li className="InfoMe__contactsList__contactsItem-Phone">Phone: +79034550459</li>
        </ul>
      </div>
      <div className="InfoMe__container" id="courses">
        <h2>Courses</h2>
        <ul className="InfoMe__courses">
          <li>
            <a href="https://app.rs.school/certificate/kq5p9o84" className="coursesLink">
              JS/FE Pre-School 2022Q2
            </a>
          </li>
          <li>JavaScript/Front-end 2022Q3</li>
        </ul>
      </div>
      <div className="InfoMe__container" id="english">
        <h2>English</h2>
        <ul>
          <li>B1 - Intermediate</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoMe;
