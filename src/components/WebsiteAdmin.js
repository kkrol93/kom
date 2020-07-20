import React from 'react';
import PropTypes from 'prop-types';

const WebsiteAdmin = ({ id, link, img, name, code }, key) => {
  let delay = 100;

  return (
    <div key={key} data-aos="fade-up" data-aos-delay={delay * 2} className="website">
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
    // <div key={++key} data-aos="fade-up" data-aos-delay={100 * key} className="website">
    //   <a href={link} className="website__title" target="_blank" rel="noopener noreferrer">
    //     <div className="website__head">
    //       <img src={img} alt="" />
    //     </div>
    //     <div className="website__description">
    //       <h3>{name}</h3>
    //       <p className="website__code">{code}</p>
    //     </div>
    //   </a>
    //   <button onClick={() => removeWebsite(id)}>Usuń</button>
    // </div>
  );
};
WebsiteAdmin.propTypes = {
  id: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
export default WebsiteAdmin;
