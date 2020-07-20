import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { login } from '../../../data/actions';

const Login = ({ login }) => (
  <section className="login">
    <h1>Zaloguj się</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        login(values.email, values.password);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email jest wymagany!';
        }
        if (!values.password) {
          errors.password = 'Hasło jest wymagane';
        }
        return errors;
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div className="error">{errors.email && touched.email && errors.email}</div>
          <label htmlFor="password">Hasło:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <div className="error">{errors.password && touched.password && errors.password}</div>

          <button type="submit">{isSubmitting ? 'Loguję...' : 'Zaloguj się'}</button>
        </form>
      )}
    </Formik>
  </section>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      login: login,
    },
    dispatch,
  ),
});
export default connect(null, mapDispatchToProps)(Login);
