import React, { Component } from 'react';
import { fetchSkills } from '../../../data/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../assets/styles/SectionSkills.scss';

class SectionSkills extends Component {
  componentDidMount() {
    const { fetchSkills } = this.props;
    fetchSkills();
  }
  render() {
    let { skills } = this.props;
    skills = skills.skills;
    return (
      <section className="skills">
        {skills.map(({ id, img }) => (
          <img key={id} src={img} alt="" data-aos="zoom-in-up" />
        ))}
      </section>
    );
  }
}
SectionSkills.propTypes = {
  skills: PropTypes.object.isRequired,
  fetchSkills: PropTypes.func.isRequired,
};
SectionSkills.defaultProps = {
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
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SectionSkills);
