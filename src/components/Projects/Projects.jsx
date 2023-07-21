import React from 'react';
import allProjects from '../../assets/projects.json';
import { useTranslation } from 'react-i18next';
import { languageContext } from '../../App';

const Projects = () => {
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(999);
  const { t } = useTranslation();
  const { state } = React.useContext(languageContext);
  return (
    <>
      <h2>{t('Projects')}</h2>
      <ul className="projects">
        <li onClick={() => setIsVisiblePopup(0)}>Travel</li>
        <li onClick={() => setIsVisiblePopup(1)}>Momentum</li>
        <li onClick={() => setIsVisiblePopup(2)}>Online zoo</li>
        <li onClick={() => setIsVisiblePopup(3)}>Gem puzzle 15</li>
        <li onClick={() => setIsVisiblePopup(4)}>SongBird</li>
        <li onClick={() => setIsVisiblePopup(5)}>React Pizza</li>
        <li onClick={() => setIsVisiblePopup(6)}>Mern blog</li>
        <li onClick={() => setIsVisiblePopup(7)}>Social network</li>
        <li onClick={() => setIsVisiblePopup(8)}>Trainer game</li>
      </ul>

      {isVisiblePopup !== 999 && (
        <>
          <div className="popup__container">
            <div className="popup__close" onClick={() => setIsVisiblePopup(999)}></div>
            <h2 className="popup__header">{allProjects[isVisiblePopup].title}</h2>
            <div
              className="popup__text"
              dangerouslySetInnerHTML={{
                __html:
                  state.language === 'en'
                    ? allProjects[isVisiblePopup].textEN
                    : allProjects[isVisiblePopup].textRU,
              }}></div>
            <a className="popup__link" href={allProjects[isVisiblePopup].link}>
              {t('Link')}
            </a>
          </div>
          <div className="popup__shadow" onClick={() => setIsVisiblePopup(999)}></div>
        </>
      )}
    </>
  );
};

export default Projects;
