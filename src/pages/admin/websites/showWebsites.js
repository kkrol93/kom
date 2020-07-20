import React, { Component } from 'react';
import '../../../assets/styles/sectionWebsites.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWebsites, removeWebsite } from '../../../data/actions/websites.actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class ShowWebsites extends Component {
  async componentDidMount() {
    const { fetchWebsites } = this.props;
    fetchWebsites();
  }
  render() {
    const { websites, removeWebsite } = this.props;
    return (
      <section className="websites">
        <h1>WYKONANE STRONY</h1>
        <div className="websites__list">
          {websites.websites.reverse().map(({ id, link, img, name, code }, key) => (
            <div key={++key} data-aos="fade-up" data-aos-delay={100 * key} className="website">
              <a href={link} className="website__title" target="_blank" rel="noopener noreferrer">
                <div className="website__head">
                  <img src={img} alt="" />
                </div>
                <div className="website__description">
                  <h3>{name}</h3>
                  <p className="website__code">{code}</p>
                </div>
              </a>
              <div className="admin__buttons">
                <Link
                  to={{
                    pathname: `/admin/websites/${id}`,
                    state: { id, link, img, name, code },
                  }}
                >
                  Edytuj
                </Link>
                <button onClick={() => removeWebsite(id)}>Usuń</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
ShowWebsites.propTypes = {
  websites: PropTypes.object.isRequired,
  fetchWebsites: PropTypes.func.isRequired,
  removeWebsite: PropTypes.func.isRequired,
};
ShowWebsites.defaultProps = {
  websites: [],
};

const mapStateToProps = (state) => {
  const { websites } = state;
  return { websites };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchWebsites: fetchWebsites,
      removeWebsite: (id) => removeWebsite(id),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ShowWebsites);
