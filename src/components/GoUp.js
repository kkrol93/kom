import React, { Component } from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GoUp extends Component {
  render() {
    return (
      <div className="go__up">
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    );
  }
}
export default GoUp;
