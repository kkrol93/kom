import React from 'react';
import '../assets/styles/Footer.scss';
import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import cv from '../assets/files/cv.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        <div className="footer__panel footer__panel-logo">
          KIND O<span>F MUSIC</span>
        </div>
        <div className="footer__panel footer__panel-more">
          <h3>Dowiedz się więcej</h3>
          <div className="footer__panel-social">
            <a
              href="https://www.linkedin.com/in/krzysztofkrol1993"
              target="_blank"
              className="linkedin"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/kkrol93"
              target="_blank"
              className="github"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={cv} target="_blank" className="cv" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGraduationCap} />
            </a>
          </div>
        </div>
        <div className="footer__panel footer__panel-contact">
          <h3>Kontakt</h3>
          <p>Jeeli masz pytania zapraszam do kontaktu:</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> krzysztof.krol@kindofmusic.pl
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
