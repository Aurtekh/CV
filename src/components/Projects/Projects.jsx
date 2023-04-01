import React from 'react';

import allProjects from '../../assets/projects.json';

const Projects = () => {
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(999);

  return (
    <>
      <h2>Projects</h2>
      <ul className="projects">
        <li onClick={() => setIsVisiblePopup(0)}>Travel</li>
        <li onClick={() => setIsVisiblePopup(1)}>Momentum</li>
        <li onClick={() => setIsVisiblePopup(2)}>Online zoo</li>
        <li onClick={() => setIsVisiblePopup(3)}>Gem puzzle 15</li>
        <li onClick={() => setIsVisiblePopup(4)}>SongBird</li>
        <li onClick={() => setIsVisiblePopup(5)}>React Pizza</li>
        <li onClick={() => setIsVisiblePopup(6)}>Mern blog</li>
      </ul>

      {isVisiblePopup !== 999 && (
        <>
          <div className="popup__container">
            <div className="popup__close" onClick={() => setIsVisiblePopup(999)}></div>
            <h2 className="popup__header">{allProjects[isVisiblePopup].title}</h2>
            <div
              className="popup__text"
              dangerouslySetInnerHTML={{ __html: allProjects[isVisiblePopup].text }}></div>
            <a className="popup__link" href={allProjects[isVisiblePopup].link}>
              Link to the Deployed project
            </a>
          </div>
          <div className="popup__shadow" onClick={() => setIsVisiblePopup(999)}></div>
        </>
      )}
    </>
  );
};

export default Projects;
