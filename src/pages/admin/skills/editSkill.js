import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { editSkill } from '../../../data/actions/skills.actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const EditSkill = ({ location, editSkill }) => {
  let img = location.state.img;
  let name = location.state.name;
  let id = location.state.id;
  let history = useHistory();
  return (
    <section className="add__website">
      <h1>Edytuj skill:</h1>
      <Formik
        initialValues={{
          img: img,
          name: name,
        }}
        onSubmit={(values) => {
          editSkill(id, values);
          history.goBack();
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
            <button type="submit">{isSubmitting ? 'Edytuję...' : 'Edytuj strone'}</button>
          </form>
        )}
      </Formik>
    </section>
  );
};
EditSkill.propTypes = {
  location: PropTypes.object.isRequired,
  editSkill: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      editSkill,
    },
    dispatch,
  ),
});
export default connect(null, mapDispatchToProps)(EditSkill);
