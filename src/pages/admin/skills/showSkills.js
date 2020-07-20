import React, { Component } from 'react';
import '../../../assets/styles/sectionWebsites.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSkills, removeSkill } from '../../../data/actions/skills.actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class ShowSkills extends Component {
  async componentDidMount() {
    const { fetchSkills } = this.props;
    fetchSkills();
  }
  render() {
    const { skills, removeSkill } = this.props;

    return (
      <section className="websites skills-admin">
        <h1>WYKONANE STRONY</h1>
        <div className="websites__list">
          {skills.skills.reverse().map(({ id, img, name }, key) => (
            <div key={++key} data-aos="fade-up" data-aos-delay={100 * key} className="website">
              <div className="website__head">
                <img src={img} alt="" />
              </div>
              <div className="website__description">
                <h3>{name}</h3>
              </div>
              <div className="admin__buttons">
                <Link
                  to={{
                    pathname: `/admin/skills/${id}`,
                    state: { id, img, name },
                  }}
                >
                  Edytuj
                </Link>
                <button onClick={() => removeSkill(id)}>Usuń</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
ShowSkills.propTypes = {
  skills: PropTypes.object.isRequired,
  fetchSkills: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired,
};
ShowSkills.defaultProps = {
  skills: [],
};

const mapStateToProps = (state) => {
  const { skills } = state;
  return { skills };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchSkills: fetchSkills,
      removeSkill: (id) => removeSkill(id),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ShowSkills);
