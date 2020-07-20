import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/admin.scss';
import { logOut } from '../../../data/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

const Nav = ({ logOut }) => {
  return (
    <section className="admin">
      <Link to="/admin/websites">
        <div className="websites__link">Wykonane Strony</div>
      </Link>
      <Link to="/admin/skills">
        <div className="websites__link">Skille</div>
      </Link>
      <Link to="" onClick={logOut}>
        <div className="websites__link">Wyloguj</div>
      </Link>
    </section>
  );
};
Nav.propTypes = {
  logOut: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logOut: logOut,
    },
    dispatch,
  );
export default connect(null, mapDispatchToProps)(Nav);
