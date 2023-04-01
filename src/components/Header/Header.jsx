import React from 'react';

const Header = () => {
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <nav className={`nav ${isVisiblePopup ? 'nav-active' : ''}`}>
          <ul className={`nav__list ${isVisiblePopup ? 'nav__list-active' : ''}`}>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#summary" className="nav__link">
                Summary
              </a>
            </li>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#education" className="nav__link">
                Education
              </a>
            </li>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#contacts" className="nav__link">
                Contacts
              </a>
            </li>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#courses" className="nav__link">
                Courses
              </a>
            </li>

            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#english" className="nav__link">
                English
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={`header__containerPopup ${isVisiblePopup ? 'active' : ''}`}
          onClick={() => setIsVisiblePopup(!isVisiblePopup)}>
          <div className="header__containerPopup__bar1"></div>
          <div className="header__containerPopup__bar2"></div>
          <div className="header__containerPopup__bar3"></div>
        </div>
        {isVisiblePopup ? (
          <div className="header__shadow" onClick={() => setIsVisiblePopup(false)}></div>
        ) : (
          ''
        )}
      </div>
    </header>
  );
};

export default Header;
