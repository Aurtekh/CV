import React from 'react';
import Projects from '../Projects/Projects';
import { useTranslation } from 'react-i18next';

const InfoMe = () => {
  const { t } = useTranslation();

  return (
    <div className="InfoMe">
      <div className="InfoMe__container" id="summary">
        <h2>{t('Summary.header')}</h2>
        <div>{t('Summary.text')}</div>
      </div>
      <div className="InfoMe__container" id="education">
        <h2>{t('Education.header')}</h2>
        <div className="InfoMe__univer">{t('Education.univer1')}</div>
        <div className="InfoMe__specialty">{t('Education.specialty1')}</div>
        <br />
        <div className="InfoMe__univer">{t('Education.univer2')}</div>
        <div className="InfoMe__specialty">{t('Education.specialty2')}</div>
      </div>
      <div className="InfoMe__container" id="skills">
        <h2>{t('Skills.header')}</h2>
        <ul className="InfoMe__check">
          <div>{t('Skills.frontend')}</div>
          <li>HTML / CSS</li>
          <li>TypeScript / JavaScript (ES6+)</li>
          <li>ReactJS</li>
          <li>Redux Toolkit / Redux / Redux Saga</li>
          <li>REST API (Axios, Fetch, React Query).</li>
          <li>Post & Pre Processing CSS / CSS Module</li>
          <li>Responsive design / Adaptive design</li>
          <li>Material UI / Bootstrap</li>
          <li>Webpack</li>
          <div>{t('Skills.backend')}</div>
          <li>Node.JS</li>
          <li>Express</li>
          <li>Mongoose</li>
          <li>Sequelize</li>
          <li>PostgreSQL / MongoDB / MySQL</li>
          <li>JWT</li>
          <div>{t('Skills.other')}</div>
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
        <h2>{t('Contacts.header')}</h2>
        <ul className="InfoMe__contactsList">
          <li className="InfoMe__contactsList__contactsItem-Location">
            {t('Contacts.location')}: {t('Contacts.city')}
          </li>
          <li className="InfoMe__contactsList__contactsItem-Email">
            {t('Contacts.email')}: ermolovichd007@gmail.com
          </li>
          <li className="InfoMe__contactsList__contactsItem-Email">Discord: Aurtekh#3786</li>
          <li className="InfoMe__contactsList__contactsItem-Phone">
            {t('Contacts.phone')}: +79034550459
          </li>
        </ul>
      </div>
      <div className="InfoMe__container" id="courses">
        <h2>{t('Courses')}</h2>
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
        <h2>{t('English')}</h2>
        <ul>
          <li>B1 - Intermediate</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoMe;
