import { FormControl, InputLabel, Select, makeStyles } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { languageContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Header = () => {
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);

  const classes = useStyles();
  const { state, setState } = React.useContext(languageContext);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    i18n.changeLanguage(event.target.value);
  };

  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <div className="header__container">
        <nav className={`nav ${isVisiblePopup ? 'nav-active' : ''}`}>
          <ul className={`nav__list ${isVisiblePopup ? 'nav__list-active' : ''}`}>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#summary" className="nav__link">
                {t('Summary.header')}
              </a>
            </li>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#education" className="nav__link">
                {t('Education.header')}
              </a>
            </li>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#skills" className="nav__link">
                {t('Skills.header')}
              </a>
            </li>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#projects" className="nav__link">
                {t('Projects')}
              </a>
            </li>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#contacts" className="nav__link">
                {t('Contacts.header')}
              </a>
            </li>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#courses" className="nav__link">
                {t('Courses')}
              </a>
            </li>
            <li className="nav__item" onClick={() => setIsVisiblePopup(false)}>
              <a href="#english" className="nav__link">
                {t('English')}
              </a>
            </li>
          </ul>
          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                {state.language === 'en' ? 'Language' : 'Язык'}
              </InputLabel>
              <Select
                native
                value={state.language}
                onChange={handleChange}
                label="Language"
                inputProps={{
                  name: 'language',
                  id: 'outlined-age-native-simple',
                }}>
                <option value={'en'}>EN</option>
                <option value={'ru'}>RU</option>
              </Select>
            </FormControl>
          </div>
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
