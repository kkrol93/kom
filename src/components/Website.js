import React from 'react';
import PropTypes from 'prop-types';

const Website = ({ id, link, img, name, code }) => {
  let delay = 100;

  return (
    <div key={id} data-aos="fade-up" data-aos-delay={delay * id} className="website">
      <a href={link} className="website__title" target="_blank" rel="noopener noreferrer">
        <div className="website__head">
          <img src={img} alt="" />
        </div>
        <div className="website__description">
          <h3>{name}</h3>
          <p className="website__code">{code}</p>
        </div>
      </a>
    </div>
  );
};
Website.propTypes = {
  id: PropTypes.number,
  link: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  code: PropTypes.string,
};
export default Website;
