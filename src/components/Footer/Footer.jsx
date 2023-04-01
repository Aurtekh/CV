import React from 'react';
import Gitimg from '../../assets/img/github.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div>
          <a href="https://github.com/Aurtekh" className="github">
            <img src={Gitimg} className="footer__gitLink" alt="GitHub" />
          </a>
        </div>
        <div className="footer__codewarsLink">
          <a href="https://www.codewars.com/users/Aurtekh" className="codewars">
            <picture>
              <source
                srcSet="https://www.codewars.com/users/Aurtekh/badges/small"
                media="(max-width: 480px)"
              />
              <img
                src="https://www.codewars.com/users/Aurtekh/badges/large"
                className="footer__codewarsLink"
                alt="codewars"
              />
            </picture>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
