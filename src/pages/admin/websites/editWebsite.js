import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { editWebsite } from '../../../data/actions/websites.actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const EditWebsite = ({ location, editWebsite }) => {
  let link = location.state.link;
  let img = location.state.img;
  let name = location.state.name;
  let code = location.state.code;
  let id = location.state.id;
  let history = useHistory();
  return (
    <section className="add__website">
      <h1>Edytuj stronę:</h1>
      <Formik
        initialValues={{
          link: link,
          img: img,
          name: name,
          code: code,
        }}
        onSubmit={(values) => {
          editWebsite(id, values);
          alert('SUCCESS!!! :-)\n\n' + JSON.stringify(values, null, 4));
          history.goBack();
        }}
        validate={(values) => {
          const errors = {};
          if (!values.link) {
            errors.link = 'Link do strony jest wymagany!';
          }
          if (!values.img) {
            errors.img = 'Link do zdjęcia jest wymagany';
          }
          if (!values.name) {
            errors.name = 'Nazwa jest wymagana!';
          }
          if (!values.code) {
            errors.code = 'Framework jest wymagany';
          }
          return errors;
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="link">Link do strony:</label>
            <input
              id="link"
              name="link"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.link}
            />
            <div className="error">{errors.link && touched.link && errors.link}</div>
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
            <label htmlFor="name">Nazwa strony:</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <div className="error">{errors.name && touched.name && errors.name}</div>
            <label htmlFor="code">Framework:</label>
            <input
              id="code"
              name="code"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.code}
            />
            <div className="error">{errors.code && touched.code && errors.code}</div>
            <button type="submit">{isSubmitting ? 'Edytuję...' : 'Edytuj strone'}</button>
          </form>
        )}
      </Formik>
    </section>
  );
};
EditWebsite.propTypes = {
  location: PropTypes.object.isRequired,
  editWebsite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      editWebsite,
    },
    dispatch,
  ),
});
export default connect(null, mapDispatchToProps)(EditWebsite);
