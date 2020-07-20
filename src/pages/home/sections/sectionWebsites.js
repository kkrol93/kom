import React, { Component } from 'react';
import '../../../assets/styles/sectionWebsites.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Website from '../../../components/Website';
import { fetchWebsites } from '../../../data/actions';
import { bindActionCreators } from 'redux';

class Websites extends Component {
  componentDidMount() {
    const { fetchWebsites } = this.props;
    fetchWebsites();
  }
  render() {
    let { websites } = this.props;
    websites = websites.websites;
    return (
      <>
        <section className="websites">
          <h1>WYKONANE STRONY</h1>
          <div className="websites__list">
            {websites.reverse().map(({ id, link, img, name, code }) => (
              <Website id={id} link={link} img={img} name={name} code={code} key={id} />
            ))}
          </div>
        </section>
      </>
    );
  }
}
Websites.propTypes = {
  websites: PropTypes.object.isRequired,
  fetchWebsites: PropTypes.func.isRequired,
};
Websites.defaultProps = {
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
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Websites);
