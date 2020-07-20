import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { addSkill } from '../../../data/actions/skills.actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

const AddSkill = ({ addSkill }) => (
  <section className="add__website">
    <h1>Dodaj skilla:</h1>
    <Formik
      initialValues={{ img: '', name: '' }}
      onSubmit={(values, { resetForm }) => {
        addSkill(values);
        resetForm({ values: '' });
      }}
      validate={(values) => {
        const errors = {};

        if (!values.img) {
          errors.img = 'Link do zdjęcia jest wymagany';
        }
        if (!values.name) {
          errors.name = 'Nazwa jest wymagana!';
        }

        return errors;
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="img">Link do zdjęcia:</label>
          <input
            id="img"
            name="img"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.img}
          />
          <div className="error">{errors.img && touched.img && errors.img}</div>
          <label htmlFor="name">Nazwa skilla:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <div className="error">{errors.name && touched.name && errors.name}</div>
          <button type="submit">{isSubmitting ? 'Dodaję...' : 'Dodaj skilla :)'}</button>
        </form>
      )}
    </Formik>
  </section>
);

AddSkill.propTypes = {
  addSkill: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      addSkill,
    },
    dispatch,
  ),
});
export default connect(null, mapDispatchToProps)(AddSkill);
